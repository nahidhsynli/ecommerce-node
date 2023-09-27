const express = require("express");

const sequelize = require("./database/index");
const User = require("./models/user");
const Adress = require("./models/adress");
const Product = require("./models/product");
const ProductCategory = require("./models/productCategory");

User.hasMany(Adress, { as: "user" });
User.hasMany(Product, { as: "seller" });
ProductCategory.hasMany(Product, { as: "productCategory" });
ProductCategory.belongsTo(ProductCategory, { as: "parent" });

sequelize.sync();

const app = express();

app.use(express.urlencoded({ extended: "true" }));

app.get("/", function (req, res) {
  res.send("OK!");
});

module.exports = app;
