"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const db = {};
require('dotenv').config();
const user = process.env.MYSQL_USERNAME;
const pass = process.env.MYSQL_PASSWORD;
const dbName = process.env.MYSQL_DATABASE;
const host = process.env.MYSQL_HOST;
const port = process.env.MYSQL_PORT;
const connectionString = `mysql://${user}:${pass}@${host}:${port}/${dbName}`;
let sequelize = new Sequelize(connectionString, {
  logging: console.log,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
