const model = require("../models/items");

exports.index = (req, res) => {
  "/", controller.index;
  res.render("index");
};

exports.trade = (req, res) => {
  "/trade", controller.trade;
  res.render("trade");
};

exports.newTrade = (req, res) => {
  "/newTrade", controller.newTrade;
  res.render("newTrade");
};

exports.trades = (req, res) => {
  "/trades", controller.trades;
  res.render("trades");
};
