module.exports = (server, app) => {
  let requiresLogin = function(req, res, next) {
    if (req.session.token) {
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

  server.post("/login", (req, res) => {
    if (req.body.data.token) {
      req.session.token = req.body.data.token;
    }
    res.status(200).send({ a: "data found", token: req.session.token });
  });

  server.get("/register", requiresLogin, (req, res) => {
    const actualPage = "/auth/register";
    const queryParams = { title: req.session };
    app.render(req, res, actualPage, queryParams);
  });
};
