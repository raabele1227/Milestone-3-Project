//require modules

const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
// const mainRoutes = require("./routes/mainRoutes");
// const tradeRoutes = require("./routes/tradeRoutes");

//create app

const app = express();

app.set("views", path.join(__dirname, "views"));

//configure app

let port = 3000;
let host = "localhost";
app.set("view engine", "ejs");

//connect to database
mongoose
  .connect("mongodb://localhost:27017/demos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, host, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch((err) => console.log(err.message));

//mount middleware

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(methodOverride("_method"));

//set up routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/trade", (req, res) => {
  res.render("trade");
});

app.get("/newTrade", (req, res) => {
  res.render("newTrade");
});

app.get("/trades", (req, res) => {

  res.render("trades");
});

app.get("/trades", async (req, res) => {
  let trades = await trade.find();
  let roasts = [...new Set(trades.map((trade) => trade.roastType))];
  res.render("trades", { trades: trades, roasts: roasts });
});

app.get("/trades/:id", async (req, res) => {
  let trade = await trade.findById(req.params.id);
  res.render("trade", { trade: trade });
});


app.use((req, res, next) => {
  let err = new Error("The server cannot locate " + req.url);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500;
    err.message = "Internal Server Error";
  }
  res.status(err.status);
  res.render("error", { error: err });
});

