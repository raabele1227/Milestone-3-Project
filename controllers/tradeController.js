const model = require("../models/items.js");

exports.new = (req, res) => {
  res.render("./items/new");
};


exports.create = (req, res, next) => {
  let items = new model(req.body);
  items.save()
    .then((items) => {
      console.log(items);
      res.redirect("/tradeItem");
    })
    .catch(err => {
      if (err.name === "ValidationError") {
        res.status(400).render("./items/new", { errors: err.errors });
      }
      next(err);
    });
}

exports.show = (req, res, next) => {
  let id = req.params.id;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    let err = new Error("Invalid item id");
    err.status = 404;
    return next(err);
  }

  model.findById()
    .then((items) => {
      if (items) {
        res.render("./items/show", { items });
      } else {
        res.status(404).send("Cannot find item with id " + id);
      }
    })
    .catch(err => {
      next(err);
    });
};


exports.edit = (req, res, next) => {
  let id = req.params.id;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    let err = new Error("Invalid item id");
    err.status = 404;
    return next(err);
  }
  let items = model.findById(id)
    .then(items => {
      if (items) {
        return res.render("./items/edit", { items });
      } else {
        let err = new Error("Cannot find a items with id" + id);
        err.status = 404;
        next(err);
      }
    })
    .catch(err => {
      next(err);
    });

};


exports.update = (req, res, next) => {
  let item = req.body;
  let id = req.params.id;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    let err = new Error("Invalid item id");
    err.status = 404;
    return next(err);
  }
  model.findByIdAndUpdate(id, item, { useFindAndModify: false, runValidators: true, new: true })
    .then((items) => {
      if (items) {
        res.redirect("/tradeItem/" + id);
      } else {
        let err = new Error("Cannot find a items with id" + id);
        err.status = 404;
        next(err);
      }
    })
    .catch(err => {
      next(err);
    });
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    let err = new Error("Invalid item id");
    err.status = 404;
    return next(err);
  }
  model.findByIdAndDelete(id, { useFindAndModify: false })
    .then(items => {
      if (items) {
        res.redirect("/tradeItem");
      } else {
        let err = new Error("Cannot find a items with id" + id);
        err.status = 404;
        return next(err);
      }
    })
    .catch(err => {
      next(err);
    });
};















