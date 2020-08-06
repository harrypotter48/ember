// import path from "path";
// import Sequelize from "sequelize";

// const db = {};
// const env = process.env.NODE_ENV || "development";
// const sequelizeConfig = require(`${__dirname}/../config.json`)[env];

// const sequelize = new Sequelize(
//   sequelizeConfig.database,
//   sequelizeConfig.username,
//   sequelizeConfig.password,
//   sequelizeConfig
// );

// const fs = require("fs");
// const path = require("path");
// fs.readdirSync("./models").forEach((file) => {
//   //const model = sequelize.import(path.join('./models', file));
//   const model = require(path.join(__dirname, "models", file))(
//     sequelize,
//     Sequelize
//   );
//   sequelize[model.name] = model;
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("connected to DB");
//     db.User = sequelize.import(path.join(__dirname, "usuario.js"));
//     // db.Post = sequelize.import(path.join(__dirname, 'post.js'));
//     // db.Comment = sequelize.import(path.join(__dirname, 'comment.js'));

//     Object.keys(db).forEach((modelName) => {
//       if (db[modelName].associate) {
//         db[modelName].associate(db);
//       }
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
// var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config.json")[env];
var db = {};

console.log(config);

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.usuario = function (sequelize, DataTypes) {
  var usuario = sequelize.define(
    "usuario",
    {
      id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: { type: DataTypes.STRING(23), allowNull: false },
      apellidos: { type: DataTypes.STRING(23), allowNull: false },
      usuario: { type: DataTypes.STRING(255), allowNull: false },
      password: { type: DataTypes.STRING(255), allowNull: false },
      unidad_id: { type: DataTypes.INTEGER(), allowNull: true },
    },
    {
      tableName: "usuario",
    }
  );
  usuario.findByLogin = async (login) => {
    let user = await usuario.findOne({
      where: { usuario: login },
    });

    return user;
  };

  // usuario.beforeCreate(async user => {
  //   user.password = await usuario.generatePasswordHash();
  // });

  // usuario.prototype.generatePasswordHash = async function() {
  //   const saltRounds = 10;
  //   return await bcrypt.hash(this.password, saltRounds);
  // };

  // usuario.prototype.validatePassword = async function(password) {
  //   return await bcrypt.compare(password, this.password);
  // };
  return usuario;
};

// fs.readdirSync(__dirname)
// .filter(function (file) {
//   return (
//     file.indexOf(".") !== 0 /*&& file !== basename*/ &&
//     file.slice(-3) === ".js"
//   );
// })
//   .forEach(function (file) {
//     console.log(file);
//     const model = require(path.join(__dirname, "models", file))(
//       sequelize,
//       Sequelize
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function (modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
