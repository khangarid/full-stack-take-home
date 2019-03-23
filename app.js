const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const bodyParser = require("body-parser");

require("./models/Entry");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

require("./routes/entryRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client-app/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client-app", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
