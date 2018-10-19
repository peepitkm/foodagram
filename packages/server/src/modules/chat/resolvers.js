import { createBatchResolver } from 'graphql-resolve-batch';
import settings from '../../../../../settings';
import modules from '../../modules';

const MESSAGES_SUBSCRIPTION = 'messages_subscription';

export default pubsub => ({
  Query: {
    async messages(obj, { limit, after }, { Chat }) {
      const edgesArray = [];
      const messages = await Chat.messagesPagination(limit, after);

      messages.map((message, index) => {
        edgesArray.push({
          cursor: after + index,
          node: message
        });
      });

      const endCursor = edgesArray.length > 0 ? edgesArray[edgesArray.length - 1].cursor : 0;
      const total = (await Chat.getTotal()).count;
      const hasNextPage = total > after + limit;

      return {
        totalCount: total,
        edges: edgesArray.reverse(),
        pageInfo: {
          endCursor: endCursor,
          hasNextPage: hasNextPage
        }
      };
    },
    message(obj, { id }, { Chat }) {
      return Chat.message(id);
    }
  },
  Message: {
    quotedMessage: createBatchResolver((sources, args, context) => {
      return context.Chat.getQuatedMessages(sources.map(({ quotedId }) => quotedId));
    })
  },
  Mutation: {
    async addMessage(obj, { input }, { Chat, user, req }) {
      const { t } = req;
      const { attachment } = input;
      const userId = user ? user.id : null;
      const {
        data: { fileSystemStorage }
      } = modules;

      if (!fileSystemStorage) {
        throw new Error(t('chat:messageNotAdded'));
      }

      const result = attachment ? await fileSystemStorage.save(await attachment, settings.chat.uploadDir) : null;
      const data = { ...input, attachment: result, userId };
      const [id] = attachment ? await Chat.addMessageWithAttachment(data) : await Chat.addMessage(data);
      const message = await Chat.message(id);
      // publish for message list
      pubsub.publish(MESSAGES_SUBSCRIPTION, {
        messagesUpdated: {
          mutation: 'CREATED',
          id,
          node: message
        }
      });
      return message;
    },
    async deleteMessage(obj, { id }, { Chat, req }) {
      const { t } = req;
      const {
        data: { fileSystemStorage }
      } = modules;
      const message = await Chat.message(id);
      const attachment = await Chat.attachment(id);
      const isDeleted = await Chat.deleteMessage(id);

      if (isDeleted && attachment && fileSystemStorage) {
        // remove file
        try {
          await fileSystemStorage.delete(attachment.path);
        } catch (e) {
          throw new Error(t('chat:fileNotDeleted'));
        }
      }

      if (isDeleted) {
        // publish for message list
        pubsub.publish(MESSAGES_SUBSCRIPTION, {
          messagesUpdated: {
            mutation: 'DELETED',
            id,
            node: message
          }
        });
        return { id: message.id };
      } else {
        return { id: null };
      }
    },
    async editMessage(obj, { input }, { Chat }) {
      await Chat.editMessage(input);
      const message = await Chat.message(input.id);
      // publish for post list
      pubsub.publish(MESSAGES_SUBSCRIPTION, {
        messagesUpdated: {
          mutation: 'UPDATED',
          id: message.id,
          node: message
        }
      });

      return message;
    }
  },
  Subscription: {
    messagesUpdated: {
      subscribe: () => pubsub.asyncIterator(MESSAGES_SUBSCRIPTION)
    }
  }
});
