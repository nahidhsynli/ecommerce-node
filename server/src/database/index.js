const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "cornelius.db.elephantsql.com",
  username: "ttadnfyk",
  password: "11n1Ac1jsoJsK7D-iMNDE7NFX8gAbxcz",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Connected db succesfully");
  })
  .catch(function (error) {
    console.log("error connecting db: " + error.message);
  });

module.exports = sequelize;
