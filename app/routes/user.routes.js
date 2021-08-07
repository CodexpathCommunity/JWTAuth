const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/text/all", controller.allAccess);

  app.get("/api/text/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/text/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
};
