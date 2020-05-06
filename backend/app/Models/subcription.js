'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  Subscription.associate = function(db) {
    // Subscription.belongsTo(db.User)
    // Subscription.belongsTo(db.Crate)
  }

  return Subscription
}