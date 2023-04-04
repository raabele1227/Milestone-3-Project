const express = require("express");
const controller = require("../controllers/mainController");

const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/trade", (req, res) => {
  res.render("trade");
});

router.get("/newTrade", (req, res) => {
  res.render("newTrade");
});

router.get("/trades", (req, res) => {
  res.render("trades");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/css/styles.css", (req, res) => {
  res.redirect("/css/styles.css");
});


// router.get("/css/index.css", (req, res) => {
//   res.redirect("/css/index.css");
// });

// router.get("/css/newTrade.css", (req, res) => {
//   res.redirect("/css/newTrade.css");
// });

// router.get("/css/trades.css", (req, res) => {
//   res.redirect("/css/trades.css");
// });

// router.get("/css/trade.css", (req, res) => {
//   res.redirect("/css/trade.css");
// });
