const jwt = require("jsonwebtoken");

const jwtSecret = require("../config/jwt");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Authorization header is missing Bearer token");
    error.statusCode = 401;
    throw error;
  }

  try {
    // const token = authHeader.split(" ")[1];
    const token = authHeader;
    const decodedToken = jwt.verify(token, jwtSecret);
  } catch (err) {
    err.statusCode = 401;
    throw err;
  }
  next();
};
