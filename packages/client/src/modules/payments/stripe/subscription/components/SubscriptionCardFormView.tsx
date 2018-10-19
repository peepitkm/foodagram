import React from 'react';
import { withFormik } from 'formik';
import { CardElement, injectStripe } from 'react-stripe-elements';

import { TranslateFunction } from '../../../../../i18n';
import Field from '../../../../../utils/FieldAdapter';
import { Form, RenderField, Button, Alert, Label } from '../../../../common/components/web';
import { required, validateForm } from '../../../../../../../common/validation';

interface SubscriptionCardFormViewProps {
  submitting: boolean;
  buttonName: string;
  error: string | null;
  handleSubmit?: () => void;
  onSubmit: (subscriptionInput: any, stripe: any) => void;
  values?: {
    name: string;
  };
  stripe?: any;
  t: TranslateFunction;
}

const SubscriptionCardFormView = (props: SubscriptionCardFormViewProps) => {
  const { handleSubmit, submitting, buttonName, error, values, t } = props;

  return (
    <Form layout="block" name="subscription" onSubmit={handleSubmit}>
      <Field
        name="name"
        component={RenderField}
        type="text"
        label={t('creditCard.name')}
        validate={required}
        value={values.name}
      />
      <Label>{t('creditCard.info')}</Label>
      <CardElement className="form-control" style={{ base: { lineHeight: '30px' } }} />
      {error && <Alert color="error">{error}</Alert>}
      <Button color="primary" type="submit" disabled={submitting} style={{ marginTop: 15 }}>
        {buttonName}
      </Button>
    </Form>
  );
};

const SubscriptionFormWithFormik = withFormik({
  mapPropsToValues: () => ({ name: '' }),
  async handleSubmit({ name }, { props }: { props: SubscriptionCardFormViewProps }) {
    const { stripe, onSubmit } = props;
    onSubmit({ name }, stripe);
  },
  validate: values => validateForm(values, { name: [required] }),
  displayName: 'StripeSubscriptionForm', // helps with React DevTools,
  enableReinitialize: true
});

export default injectStripe(SubscriptionFormWithFormik(SubscriptionCardFormView));
