# TypeScript Web App Template

A basic Typescript web app project template that uses Vite.

![License](https://img.shields.io/badge/license-MIT-green)

## Requirements

<a href="https://nodejs.org" target="_blank">Node.js</a> and <a href="https://pnpm.io/" target="_blank">pnpm</a> are required to install dependencies and run scripts via `pnpm`.

**Note:** You can also use `npm` to install the required project dependencies. To do this, replace the commands listed below with the relevant `npm` command, such as `npm install` or `npm run start`.

<a href="https://vitejs.dev/" target="_blank">Vite</a> is required to bundle and serve the web application. This is included as part of the projects dev dependencies.

## Available Commands

| Command | Description |
|---------|-------------|
| `pnpm install --frozen-lockfile` | Install project dependencies |
| `pnpm start` | Build project and open web server running project |
| `pnpm build` | Builds code bundle for production |
| `pnpm lint` | Uses ESLint to lint code |
| `pnpm version` | Updates the project version and the changelog file |

## Writing Code

After cloning the repo, run `pnpm install --frozen-lockfile` from your project directory. Then, you can start the local development
server by running `pnpm start`.

After starting the development server with `pnpm start`, you can edit any files in the `src` folder
and parcel will automatically recompile and reload your server (available at `http://localhost:8080`
by default).

## Deploying Code

After you run the `pnpm build` command, your code will be built into a single bundle located at
`dist/*` along with any other assets you project depended.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://myserver.com`),
you should be able to open `http://myserver.com/index.html` and play your game.

## Customizing Template

### ESLint

This template uses `typescript-eslint` for linting, and it has been setup to extend the [airbnb](https://github.com/airbnb/javascript) style guide. To modify these settings, you will need to update the `./config/eslint.config.mjs` file with your plugins, rules, etc.

### Static Assets

Any static assets like images or audio files should be placed in the `public` folder. It'll then be served at `http://localhost:8080/path-to-file-your-file/file-name.file-type`.

## Changelog

This project uses <a href="https://github.com/CookPete/auto-changelog" target="_blank">auto-changelog</a> for maintaining the changelog. You can view the Changelog here: [Changelog](CHANGELOG.md).
