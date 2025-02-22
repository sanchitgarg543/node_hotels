const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

app.get("/", (req, res) => {
  res.send("Welcome to our hotel");
});

//import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");
//use the routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

// app.get("/page3", (req, res) => {
//   var custom = {
//     name: "rava indli",
//     size: "10 cm diameter",
//     is_sambhar: true,
//     ischutney: false,
//   };
//   res.send(custom);
// });

app.post("/items", (req, res) => {
  // console.log("Data is saved")
  res.send("Data is sent");
});
const PORT = process.env.PORT || 3000; //generally paste at the top

app.listen(PORT, () => {
  console.log("Listening to port 3000");
});
