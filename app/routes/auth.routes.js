const verifySignUp = require("../middleware/verifySignUp.js");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, content-Type, Accept"
    );
    next();
  });

  app.post(
    "/app/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  app.post("../api/auth/signin", controller.signin);
};
