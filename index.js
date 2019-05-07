const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);
const app = express();

//set session cookie
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//returns a function and the app object is a parameter
require("./routes/authRoutes")(app);

//production environment or default 5000 (for local environment)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
