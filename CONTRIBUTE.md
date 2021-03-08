# Contributing to Create Apollo-Server App

Thanks for visiting here! There are plenty of ways you can help.

Please take a moment to review this document in order to make the contribution process straightforward and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first** if somebody else is already working on this or the core developers think your feature is in-scope. Generally always have a related issue with discussions for whatever you are including.

### Overview of directory structure

```
bin
src
templates
  create-apolloserver-app
```

## Setting Up a Local Copy

1. Clone the repo with `git clone https://github.com/Itsaadarsh/create-apolloserver-app.git`

2. Run `npm install` in the root `create-apolloserver-app` folder.

Once it is done, you can modify any file locally.

3. You can create `npm link` to test package locally and make changes to it.

4. If you want to change template it can be found here `templates/create-apolloserver-app`.

If you want to try out the end-to-end flow with the global CLI, you can do this too:

```sh
npx create-apolloserver-app
```

and then run `yarn watch` or `npm run watch` on one terminal and `yarn start` or `npm run start` on the other terminal.

## Tips for contributors using Windows

The scripts in tasks folder and other scripts in `package.json` will not work in Windows out of the box. However, using [Bash on windows](https://msdn.microsoft.com/en-us/commandline/wsl/about) makes it easier to use those scripts without any workarounds. The steps to do so are detailed below:

### Install Bash on Ubuntu on Windows

A good step by step guide can be found [here](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

### Install Node.js and yarn

Even if you have node and yarn installed on your windows, it would not be accessible from the bash shell. You would have to install it again. Installing via [`nvm`](https://github.com/creationix/nvm#install-script) is recommended.
