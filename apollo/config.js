// {
//   "development": {
//     "username": "postgres",
//     "password": "postgres",
//     "database": "enterprise",
//     "host": "127.0.0.1",
//     "dialect": "postgres",
//     "define": {
//       "freezeTableName": true,
//       "timestamps": false
//     }
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "emberreact",
//     "host": "160.20.10.2",
//     "dialect": "mysql",
//     "define": {
//       "freezeTableName": true,
//       "timestamps": false
//     },
//     "logging": false
//   }
// }

const packageJson = require("../package.json");
const manifest = require("../public/manifest.json");

const appSlug = "ember";
const serverPort = process.env.PORT || 3003;

const completeConfig = {
  default: {
    serverPort,
    appSlug,
    appUrl: process.env.APP_URL || "", // Used for GraphQL url - see graphql/apollo.js. Not used/needed by Zeit Now.
    appName: manifest.name,
    appTagline: manifest.description,
    appDescription: manifest.description,
    locale: "en_US",
    googleAnalyticsId: "UA-XXXXXXX-X",
    googleSiteVerification: false,
    databaseUrl: process.env.DATABASE_URL,
    graphqlPath: "/api/graphql",
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    googleAnalyticsId: null,
  },

  production: {},
};

// Public API
module.exports = {
  config: {
    ...completeConfig.default,
    ...completeConfig[process.env.NODE_ENV],
  },
  completeConfig,
};
