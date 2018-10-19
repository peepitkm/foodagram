<p align="center"><a href="#"><img width="150" src="https://rawgit.com/sysgears/apollo-universal-starter-kit/master/logo.svg"></a></p>

# Apollo Universal Starter Kit

[![Backers on Open Collective](https://opencollective.com/apollo-universal-starter-kit/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/apollo-universal-starter-kit/sponsors/badge.svg)](#sponsors)
[![Join the chat at https://gitter.im/sysgears/apollo-fullstack-starter-kit](https://badges.gitter.im/sysgears/apollo-fullstack-starter-kit.svg)](https://gitter.im/sysgears/apollo-fullstack-starter-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/sysgears/apollo-universal-starter-kit.svg?branch=master)](https://travis-ci.org/sysgears/apollo-universal-starter-kit)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter Follow](https://img.shields.io/twitter/follow/sysgears.svg?style=social)](https://twitter.com/sysgears)

**Use [our chat](https://gitter.im/sysgears/apollo-fullstack-starter-kit) to get help or to discuss general topics about 
the Apollo Universal Starter Kit.**

## Description 

Apollo Universal Starter Kit is an SEO-friendly, fully-configured, modular starter project for developing [Universal 
JavaScript] applications. You can use this kit to create your applications in JavaScript or TypeScript for all major 
platforms &ndash; mobile, web, and server.
 
Apollo Universal Starter Kit is built on top of [Apollo], [GraphQL], [JWT], [React 16], [Redux], [React Native], [Expo], 
[Knex], and [Express] with support for relational databases such as PostgreSQL and MySQL. [TypeScript] is used across 
the entire project, but you can freely mix vanilla JavaScript (ES6 and ES7) and TypeScript.

The starter kit also integrates [Twitter Bootstrap], [Ant Design], and [NativeBase] to provide great possibilities for
styling for your applications.

## Table of Contents

* [Overview](#overview)
    * [Why Use Apollo Universal Starter Kit](#why-use-apollo-universal-starter-kit)
    * [Concept](#concept)
    * [Architecture and Implemented Modules](#architecture-and-implemented-modules)
* [Demo](#demo)
* [Branches](#branches)
* [First Run of Apollo Universal Starter Kit](#first-run-of-apollo-universal-starter-kit)
* [Project Structure](#project-structure)
* [Wiki Sections on Apollo Universal Starter Kit](#wiki-sections-on-apollo-universal-starter-kit)
* [Support](#support)
    * [Community Support](#community-support)
    * [Commercial Support](#commercial-support)
* [Contributors](#contributors)
* [Backers](#backers)
* [Sponsors](#sponsors)
* [License Info](#license)

## Overview 

### Why Use Apollo Universal Starter Kit

#### I Am a Developer

* Better productivity thanks to live reloading
* An example of the modular architecture that's easy to support and extend
* The possibility to write app modules using both TypeScript and JavaScript (both ES6 and ES7 styles)
* No need to develop [typical functionalities](#architecture-and-implemented-modules) for your app
* Zero Webpack configurations thanks to [SpinJS]

#### I Am a Client

* Your team can start creating an app for any platform &ndash; web, server, and mobile
* Your team wil be able to reuse the code they write for all the platforms
* Your app will work faster thanks to the use of GraphQL instead of REST
* Your app will be easier to support and evolve thanks to the modular architecture
* Your app will be based on a widely used JavaScript ecosystem (read: it's easy to find JS developers)
* Your team can focus on the application features straightaway instead of creating the basic functionality 
* Your app will be integrated with Stripe, one of the top payment processors 

### Concept

Configuring JavaScript-based client-server-mobile projects never was a trivial task. Not only do you have to spend time
installing all the dependencies and managing them, but you're also constrained to implement many basic functionalities
over and over again. And you never have time for building a starter codebase that you can reuse across all of your projects.

To relieve you from the burden of configuring the project, building the application structure, and implementing typical 
features, we've created Apollo Universal Starter Kit.

Apollo Universal Starter Kit provides you with a client-server-mobile application that you can employ as a foundation 
for developing new web or mobile projects using popular tools from the JavaScript ecosystem. But the starter kit doesn't
just creates a mix of top JS technologies. In fact, the kit is powered by several _custom_ libraries and solutions to simplify
managing project configurations, creating new modules, building GraphQL queries, and carry out other tasks. 

One such solution that helps to build and configure your Apollo Universal Starter Kit project without any complications 
is [SpinJS], a custom build tool that configures Webpack for you. With SpinJS, we reduced the amount of errors that are 
caused by the third-party libraries used for building the project. 

The starter kit also consists of many modules that you can augment and adapt to your specific application, or use as a 
reference when implementing basic features for your applications (even if you build them with other technologies).

If you want to learn more about the features available in Apollo Universal Starter Kit, follow to the [dedicated Wiki
section](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Features-and-Modules).

Learn more about the main modules in [Architecture and Implemented Modules](#architecture-and-implemented-modules).

### Architecture and Implemented Modules

Among all the approaches to building the application architecture, we chose the disposable fractal-based modular architecture. You can remove any built-in modules without breaking the application. We recommend that you develop your custom modules with the same idea in mind when using the starter kit.

The implemented modules are:

* **Authentication**. This module provides authentication via social networks (Facebook, GitHub, and Google using 
OAuth 2.0) and with username and password. It also implements functionality for refreshing a forgotten password.
* **Authorization**. Various user roles are available &ndash; the admin and registered user.
* **Pagination**. The app provides navigation between pages and presentation of entities.
* **Contact Us Form**. Provided functionality to send messages with attachments to the server side.
* **Posts and Comments**. The module includes functionality to add, delete, and update posts and comments.
* **404 Not Found Page**. A minimalistic module for handling 404 requests.
* **State Management**. The application state stored in the database and on the client.
* **Payments**. The billing module provides functionality for recurring payments based on Stripe.

Modules in progress:

* **Mobile Chat**. The live chat is based on the famous React Native Gifted Chat UI and is powered by GraphQL 
subscriptions.

## Demo

Here's a demo of Apollo Universal Starter Kit in work: 

![screencast](https://user-images.githubusercontent.com/1259926/27387579-c6799ada-56a1-11e7-93fc-d08e9970640d.gif)

You can also view the latest version of [Apollo Universal Starter Kit deployed to Heroku](https://apollo-universal-starter-kit.herokuapp.com).
If you want to see a mobile application in action, check out [this demo on Expo.io](https://expo.io/@sysgears/apollo-universal-starter-kit).

## Branches

| Branch       | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| [stable]     | The latest stable version of the kit (recommended)           |
| [single]     | A single-package Apollo v2 version of the kit                |
| [apollo1]    | The Apollo v1 version of the kit                             |
| [cli-crud]   | This version features a CLI to generate CRUD implementations |

## First Run of Apollo Universal Starter Kit

Verify if you use Node.js 6.x or higher (Node.js 8.x is recommended) before running the starter kit in your development
environment.

1. Clone the stable branch of Apollo Universal Starter Kit.

```
git clone -b stable https://github.com/sysgears/apollo-universal-starter-kit.git
cd apollo-universal-starter-kit
```

2. Install the dependencies. Make sure that you use Yarn 1.0.0 or higher; or you can use NPM instead of Yarn to handle 
the starter kit dependencies and to run scripts.

```
yarn
```

3. Seed sample data to the database. The command below will create new tables with sample data in SQLite:

```
yarn seed
```

4. Run the starter kit in development mode:

```
yarn watch
```

For more information about running this starter kit for mobile development or Docker, consult the [Getting Started] Wiki
section. 

## Project Structure

The project structure presents generally accepted guidelines and patterns for building scalable web and mobile 
applications. 

The structure is _fractal_ meaning the functionality is grouped primarily by feature rather than by file type. But the 
current structure isn't prescriptive, and you can change it however you need.

```
apollo-universal-starter-kit
├── config/                     # Global application configurations
├── docs/                       # Documentation
├── node_modules/               # Global Node.js modules
├── packages/                   # Source code of the application
│   ├── client/                 # Front-end package
│   │   └── src/
│   │       ├── app/            # Common front-end application code
│   │       ├── modules/        # Front-end feature-modules, each module has:
│   │       │                   # components, containers, GraphQL queries, and redux reducers
│   │       ├── testHelpers/    # Test helper for front-end integration tests
│   │       └── index.tsx       # Entry point to web front-end with hot code reload
│   ├── common/                 # Yarn package with common code, a Redux store, and logging
│   ├── mobile/                 # Mobile front-end package
│   │   └── src/
│   │       ├── .spinrc.js      # Mobile application properties 
│   │       └── index.ts        # Entry point to mobile front-end with live code reload
│   └── server/                 # Back-end Yarn package
│       ├── src/
│       │   ├── api/            # GraphQL API implementation
│       │   ├── database/       # Database migrations and seeds
│       │   │   └── migrations/ # Database migration scripts using Knex
│       │   │   └── seeds/      # Database seed scripts using Knex
│       │   ├── middleware/     # GraphQL Playground, GraphQL express and SSR rendering
│       │   ├── modules/        # Back-end server feature-modules, each module has:
│       │   │                   # schema definition, resolvers, and sql queries
│       │   ├── sql/            # Knex connector
│       │   ├── testHelpers/    # Test helper for back-end integration tests
│       │   ├── server.js       # GraphQL api server setup
│       │   └── index.ts        # Entry point to back-end with hot code reload
│       └── .spinrc.js          # Server application properties
└── tools/                      # All build and CLI-related files
```

## Wiki Sections on Apollo Universal Starter Kit

In the list below, you can follow to various documents that explain different aspects of running, using, and
configuring Apollo Universal Starter Kit.

* [Getting Started]
    * [Installing and Running Apollo Universal Starter Kit](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Getting-Started#installing-and-running-apollo-universal-starter-kit).
    * [Running a Mobile App with Expo](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Getting-Started#running-a-mobile-app-with-expo)
    * [Running the Starter Kit in a Mobile Simulator](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Getting-Started#running-the-starter-kit-in-a-mobile-simulator)
    * [Running Apollo Universal Starter Kit with Docker](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Getting-Started#running-apollo-universal-starter-kit-with-docker)
    * [Deploying Apollo Starter Kit App to Production](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Getting-Started#deploying-apollo-starter-kit-application-to-production)
* [Configuring Apollo Universal Starter Kit](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Configuring-Apollo-Starter-Kit)
* [Writing the Code](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Writing-the-Code)
* [Apollo Universal Starter Kit CLI: Scaffolding Feature Modules](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Apollo-Starter-Kit-CLI)
* [Available Scripts](https://github.com/sysgears/apollo-universal-starter-kit/wiki/Available-Scripts)

## Support

### Community Support

* [Gitter channel] &ndash; ask questions, find answers, and participate in general discussions
* [GitHub issues] &ndash; submit issues and send feature requests
* [Wiki] &ndash; read documentation for the usage scenarios of the starter kit; edit the documentation
* [FAQ] &ndash; consult the Frequently Asked Questions section in Wiki

### Commercial Support

The [SysGears](https://sysgears.com) team provides comprehensive support for commercial partners. Our team will give 
guidance on the usage of Apollo Universal Starter Kit and will help you build your application based on the kit.
 
You can contact us via [Skype](http://hatscripts.com/addskype?sysgears) or email [info@sysgears.com](mailto:info@sysgears.com).

## Contributors

Thanks a lot to all the wonderful people who contributed to Apollo Universal Starter Kit!

<a href="https://github.com/sysgears/apollo-universal-starter-kit/graphs/contributors"><img src="https://opencollective.com/apollo-universal-starter-kit/contributors.svg?width=890" /></a>

## Backers

Thanks a lot to all our backers!

<a href="https://opencollective.com/apollo-universal-starter-kit#backers" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/backers.svg?width=890"></a>

## Sponsors

You can support this project by becoming a sponsor! Your logo will show up here with a link to your website.

<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/0/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/1/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/2/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/3/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/4/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/5/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/6/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/7/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/8/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/apollo-universal-starter-kit/sponsor/9/website" target="_blank"><img src="https://opencollective.com/apollo-universal-starter-kit/sponsor/9/avatar.svg"></a>

## License

Copyright © 2016, 2017 [SysGears INC]. This source code is licensed under the [MIT] license.

[mit]: LICENSE
[universal javascript]: https://medium.com/@mjackson/universal-javascript-4761051b7ae9
[apollo]: http://www.apollostack.com
[graphql]: http://graphql.org
[jwt]: https://jwt.io
[react 16]: https://reactjs.org/
[redux]: http://redux.js.org
[react native]: https://facebook.github.io/react-native/
[expo]: https://expo.io/
[knex]: http://knexjs.org
[express]: http://expressjs.com
[typescript]: https://www.typescriptlang.org/
[twitter bootstrap]: http://getbootstrap.com
[ant design]: https://ant.design
[nativebase]: https://nativebase.io
[spinjs]: https://github.com/sysgears/spinjs
[stable]: https://github.com/sysgears/apollo-universal-starter-kit/tree/stable
[single]: https://github.com/sysgears/apollo-universal-starter-kit/tree/single
[apollo1]: https://github.com/sysgears/apollo-universal-starter-kit/tree/apollo1
[cli-crud]: https://github.com/sysgears/apollo-universal-starter-kit/tree/cli-crud
[getting started]: https://github.com/sysgears/apollo-universal-starter-kit/wiki/Getting-Started
[sysgears inc]: http://sysgears.com
[gitter channel]: https://gitter.im/sysgears/apollo-fullstack-starter-kit
[github issues]: https://github.com/sysgears/apollo-universal-starter-kit/issues
[Wiki]: https://github.com/sysgears/apollo-universal-starter-kit/wiki
[FAQ]: https://github.com/sysgears/apollo-universal-starter-kit/wiki/Frequently-Asked-Questions
