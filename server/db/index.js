"use strict";
const Sequelize = require("sequelize");

const db = require("./database");

const Puppy = db.define("puppy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://i0.wp.com/s3.amazonaws.com/wmfeimages/wp-content/uploads/2018/09/27182802/4189366235_060e3e8e6f_z.jpg?fit=640%2C480&ssl=1"
  },
  birthdate: {
    type: Sequelize.DATE,
    defaultValue: new Date()
  }
});

const Party = db.define("party", {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  place: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Puppy.hasMany(Party);
Party.belongsTo(Puppy);

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)

module.exports = {
  // Include your models in this exports object as well!
  db,
  Puppy,
  Party
};
