const User = require("../model/User");
const APIKEY = require("../config/apiKey");
const fetch = require("node-fetch");

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

exports.getEvents = async (req, res, next) => {
  // const headers = {
  //   "content-Type": "application/json",
  //   Authorization: "Bearer XVHCUJPXYXCHAS6FEXYC"
  // };

  const request = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${APIKEY}`,
   
  );
  const response = await request.json();
  res.json(response.events);
};
