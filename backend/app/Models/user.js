"use strict";

// User
module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
    },
  });

  User.associate = function (db) {
    // User.hasMany(db.Subscription);
  };

  return User;
};
