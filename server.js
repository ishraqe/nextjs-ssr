//npm modules
const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const expressRoutes = require("./expressRoutes");
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(
      session({
        secret: "my cats name again",
        resave: false,
        saveUninitialized: false,
        store: new FileStore(),
        cookie: {
          httpOnly: false, // key
          maxAge: null
        }
      })
    );

    expressRoutes(server, app);
    server.get("*", (req, res) => {
      req.session.user = "ish";
      return handle(req, res);
    });
    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
