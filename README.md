# TypeScript Snowpack Template

A basic Typescript web app project template that uses Snowpack.

![License](https://img.shields.io/badge/license-MIT-green)

## Requirements

[Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com/) are required to install dependencies and run scripts via `yarn`.

[Snowpack](https://www.snowpack.dev/) is required to bundle and serve the web application. This is included as part of the projects dev dependencies.

## Installation

1. Create a [GitHub personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to install LP packages through Yarn
1. Clone repo and Install dependencies:

   ```bash
   yarn config set @scottwestover:registry https://npm.pkg.github.com/
   echo "//npm.pkg.github.com/:_authToken=<github_personal_access_token>" > .npmrc
   yarn install
   ```

## Available Commands

| Command | Description |
|---------|-------------|
| `yarn install --frozen-lockfile` | Install project dependencies |
| `yarn start` | Build project and open web server running project |
| `yarn build` | Builds code bundle for production |

## Writing Code

After cloning the repo, run `yarn install --frozen-lockfile` from your project directory. Then, you can start the local development
server by running `yarn start`.

After starting the development server with `yarn start`, you can edit any files in the `src` folder
and parcel will automatically recompile and reload your server (available at `http://localhost:8080`
by default).

## Deploying Code

After you run the `yarn build` command, your code will be built into a single bundle located at
`dist/*` along with any other assets you project depended.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://myserver.com`),
you should be able to open `http://myserver.com/index.html` and play your game.

## Customizing Template

### ESLint

This template uses `typescript-eslint` for linting, and it has been setup to extend the [airbnb](https://github.com/airbnb/javascript) style guide. To modify these settings, you will need to update the `.eslintrc.js` file with your plugins, rules, etc.

### Static Assets

Any static assets like images or audio files should be placed in the `public` folder. It'll then be served at `http://localhost:8080/path-to-file-your-file/file-name.file-type`.

## Changelog

This project uses [auto-changelog](https://github.com/CookPete/auto-changelog) for maintaining the changelog. You can view the Changelog here: [Changelog](CHANGELOG.md).
