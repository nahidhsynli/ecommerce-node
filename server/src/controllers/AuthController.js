const bcrypt = require("bcrypt");
const User = require("../models/user");

const SALT_ROUNDS = 10;

async function login(req, res) {}

async function registration(req, res) {
  const { fullName, email, password } = req.body;

  const ExistingUser = await User.findOne({ where: { email } });
  if (ExistingUser) {
    return res.status(400).send({
      error: "User already exist",
    });
  }

  const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);

  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });
  return res.status(201).send({
    error: null,
    user,
  });
}

module.exports = {
  login,
  registration,
};
