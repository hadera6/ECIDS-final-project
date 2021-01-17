const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const account = require("./routes/account");
const registerCitizen = require("./routes/registerCitizen.js");
const updateCitizen = require("./routes/updateCitizen.js");
const displayAllCitizen = require("./routes/displayAllCitizen.js");
const displayOneCitizen = require("./routes/displayOneCitizen.js");
const banService = require("./routes/banService.js");
const unbanService = require("./routes/unbanService.js");
const verifyId = require("./routes/verifyId.js");


const app = express();

var cors = require('cors')  //use this

app.use(cors()) //and this


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes

app.use("/api", updateCitizen)

app.use("/api", account);

app.use("/api", registerCitizen);

app.use("/api", displayAllCitizen);

app.use("/api", displayOneCitizen);

app.use("/api", banService);

app.use("/api", unbanService);

app.use("/api", verifyId);

//app.use("/api", unbanService);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));