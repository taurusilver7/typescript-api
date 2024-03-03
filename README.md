# Typescript API

> A CRUD API built with Express JS, Typescript as forerunner language, Mongodb, zod validation and Jest

Instead of building the structure from scratch, use a template to create a starter directory, ready for development.

```bash
npx create-express-api --typescript --directory api_name
```

Includes API Server utilities:

-  [morgan](https://www.npmjs.com/package/morgan) HTTP request logger middleware for node.js
-  [helmet](https://www.npmjs.com/package/helmet) Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
-  [dotenv](https://www.npmjs.com/package/dotenv)
   Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
-  [cors](https://www.npmjs.com/package/cors)
   CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

-  [typescript](https://www.npmjs.com/package/typescript)
   TypeScript is a language for application-scale JavaScript.
-  [ts-node](https://www.npmjs.com/package/ts-node)
   TypeScript execution and REPL for node.js, with source map and native ESM support.
-  [nodemon](https://www.npmjs.com/package/nodemon)
   nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
-  [eslint](https://www.npmjs.com/package/eslint)
   ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
-  [typescript-eslint](https://typescript-eslint.io/)
   Tooling which enables ESLint to support TypeScript.
-  [jest](https://www.npmjs.com/package/mocha)
   Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
-  [supertest](https://www.npmjs.com/package/supertest)
   HTTP assertions made easy via superagent.

## Available Scripts

```bash
npm install
# lint exec
npm run lint
# test run
npm run test
# dev server
npm run dev
```

## Build

The `app.ts` loads the express app with the basic middlewares provided, while the `index.ts` in src directory starts the express server on a designated port on a local machine.

Keep the app & index as seperate stand-alone files to run the test on app server & listener separately.

The `api/index.ts` holds all the routes & `middleware` in src holds the custom middlewares like error handling & not-found cases.

Stick to eith MVC architecture or a feature-based structure. For the latter, all the functions regarding a feature are stacked in a directory. src/api/todo directory

Create a route & data model for the todo, and write a test case for the expected output from the todo routes. Create the routes & their corresponding handler function before writing their test cases. With each route defined, their corresponding test cases complicates.

Setup the database in the src directory. Create a mongo client instance for the database using the connection string from the env variable.

Separate the async handler function in the routes to a controller, corresponding to the route.

The server usually has the error handler as the last register in its middleware chain. The error handler is called whenever a controller function calls for a next method with an error.
