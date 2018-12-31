module.exports = (server, app) => {
  let requiresLogin = function(req, res, next) {
    console.log(req.session.user);
    if (req.session.user !== "tanvir") {
      err = new Error("Not authorized");
      res.status(500).redirect("/");
    }
    return next();
  };
  server.get("/login", (req, res) => {
    const actualPage = "/auth/login";
    const queryParams = { title: req.session };
    app.render(req, res, actualPage, queryParams);
  });

  server.get("/register", (req, res) => {
    const actualPage = "/auth/register";
    const queryParams = { title: req.session };
    app.render(req, res, actualPage, queryParams);
  });
};
