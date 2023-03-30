const model = require("../models/items.js");

exports.new = (req, res) => {
  res.render("./items/new");
};

exports.edit = (req, res, next) => {
  let id = req.params.id;
  let items = model.findById(id);
  if (items) {
    res.render("./items/edit", { items });
  } else {
    res.status(404).send("Cannot find item with id " + id);
  }
};

exports.update = (req, res) => {
  let items = req.body;
  let id = req.params.id;

  if (model.updateById(id, items)) {
    res.redirect("/tradeItem/" + id);
  } else {
    let err = new Error("Cannot find a items with id" + id);
    err.status = 404;
    next(err);
  }
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  if (model.deleteById(id)) {
    res.redirect("/tradeItem");
  } else {
    let err = new Error("Cannot find a items with id" + id);
    err.status = 404;
    next(err);
  }
};
