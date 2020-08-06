const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    BACKEND_URL: (() => {
      if (isDev) return "http://localhost:25500/graphql";
      if (isStaging) return "http://localhost:25500/graphql";
      if (isProd) return "http://localhost:25500/graphql";
    })(),
    API_BASE_URL: (() => {
      if (isDev) return "http://localhost:25500";
      if (isStaging) return "http://localhost:25500";
      if (isProd) return "http://localhost:25500";
    })(),
    PGUSER: "postgres",
    PGPASSWORD: "postgres",
    PGHOST: "localhost",
    PGPORT: "5432",
    PGDATABASE: "enterprise",
    APPNAME: (() => {
      if (isDev) return "EMBER";
      if (isStaging) return "EMBER";
      if (isProd) return "EMBER";
    })(),
  };

  //   {
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

  // next.config.js object
  return {
    env,
    serverRuntimeConfig: {
      JWT_SECRET: "1qazxsw23edcvfr45tgb",
    },
  };
};
