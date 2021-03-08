# Create Apollo-Server App

<p>
  <a href="https://www.npmjs.com/package/create-apolloserver-app"><img src="https://img.shields.io/npm/v/create-apolloserver-app.svg?style=flat" alt="npm version"></a>
  <a href="CONTRIBUTING.md#pull-requests"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
  <a href="#license"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000"></a>
</p>

> Create your inital file setup for an apollo-server project with one command `npx create-apolloserver-app`

## Introduction

Create Apollo-Server App is a CLI tool that provides you with an initial file setup required for an apollo-server project that uses TypeORM as ORM and PostgreSQL as Database.

## Installation

Create Apollo-Server App is available as the [`create-apolloserver-app` package](https://www.npmjs.com/package/create-apolloserver-app) on [npm](https://www.npmjs.com).

To create a new apollo server app, you may choose one of the following methods:

### npx

```sh
npx create-apolloserver-app
```

### Yarn

```sh
yarn create apolloserver-app
```

It will spit out all the required files in the root directory `/`.

Inside the newly created project, you can run some built-in commands:

### `npm install` or `yarn install`

To install the dependencies

### `npm run watch` or `yarn watch` (Terminal 1)

To build all the typescript files in the `/dist` directory

### `npm start` or `yarn start` (Terminal 2)

Runs the server in development mode.<br>
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view it in the browser.

## Contributing

I would love to have your helping hand on `create-apolloserver-app` ! Visit [CONTRIBUTE.md](CONTRIBUTE.md) for more information on how to get started with this project.

## License

Create Apollo-Server App is open source software [licensed as MIT](https://github.com/Itsaadarsh/create-apolloserver-app/blob/main/LICENSE).
