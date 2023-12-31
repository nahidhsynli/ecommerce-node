const express = require("express");
const APP_ROUTER = require("./routes");

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
app.use(express.json());

app.use(APP_ROUTER);

module.exports = app;
