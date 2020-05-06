const { validationResult } = require("express-validator");
const UserService = require("../Services/User");
const settings = require("../config/config");
const jwt = require("jsonwebtoken");
const redis = require("redis");
require("dotenv").config();
const client = redis.createClient("redis://redis:6379");
const tokenVersion = "v1";

// AUTHENTICATE FUNCTIONS
var createAccessToken = function (userId, loginTime) {
  var token = jwt.sign(
    JSON.stringify({
      version: tokenVersion,
      id: userId,
      logged_at: loginTime,
    }),
    settings.secret
  );
  return token;
};

client.on("error", (err) => {
  console.log("Error" + err);
});

exports.postLogin = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.json({
      status: "failed",
    });
  }

  var userService = new UserService(req);
  console.log(`${req.body.email}${req.body.password}`);
  return client.get(
    `Login:${req.body.email}${req.body.password}`,
    (err, result) => {
      if (result) {
        const resultJSON = JSON.parse(result);
        var access_token = createAccessToken(
          resultJSON.id,
          parseInt(new Date().getTime() / 1000)
        );
        return res.json({
          status: "success",
          data: {
            access_token: access_token,
            user: resultJSON,
          },
        });
      } else {
        userService
          .login()
          .then((userInfo) => {
            var access_token = createAccessToken(
              userInfo.id,
              parseInt(new Date().getTime() / 1000)
            );
            client.setex(
              `Login:${req.body.email}${req.body.password}`,
              3600,
              JSON.stringify({ userInfo })
            );
            return res.json({
              status: "success",
              data: {
                access_token: access_token,
                user: userInfo,
              },
            });
          })
          .catch((error) => {
            return res.json({
              status: "failed",
              message: error.message,
            });
          });
      }
    }
  );
};
