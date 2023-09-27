const { DataTypes } = require("sequelize");

const sequelize = require("../database/index");

const Adress = sequelize.define(
  "Adress",
  {
    addresLine1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addresLine2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Adress;
