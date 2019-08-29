const User = require("../model/User");

exports.getUsers = async (req, res, next) => {
  try {
    const usersFromDb = await User.find({});
    const users = usersFromDb.map(
      ({ firstName, lastName, email, password }) => {
        firstName, lastName, email, password;
      }
    );
    return res.json({ users });
  } catch (error) {
    console.log(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    console.log("hit");
    const { email, firstName, lastName, password } = req.body;
    const newUser = new User({
      email,
      firstName,
      lastName,
      password
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};
