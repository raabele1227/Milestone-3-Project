const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = newSchema({

  itemName: { type: String, required: [true, 'item name is required'] },
  itemTopic: { type: String, required: [true, 'item topic is required'] },
  details: { type: String, required: [true, 'details are required'] },
  roastType: { type: String, required: [true, 'roast type is required'] },
  coffeeName: { type: String, required: [true, 'coffee name is required'] },
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

// collection name in database is "items"
module.exports = mongoose.model("Item", itemSchema);
const Item = mongoose.model("Item", itemSchema);

// Path: controllers/items.js
const Item = require("../models/items");

exports.create = (req, res) => {
  let item = new Item(req.body);
  item.save((err, result) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    }
    res.json(result);
  });
};

exports.list = (req, res) => {
  Item.find((err, items) => {
    if (err) {
      res.status(400).json({
        error: err,
      });

      res.json(items);
    }
  });
};

exports.itemById = (req, res, next, id) =>  { 
  










// {
//   _id: "1",
//     roastType: "Light",
//       coffeeName: "Cinnamon",
//   },
// {
//   id: "2",
//     roastType: "Light",
//       coffeeName: "New England",
//   },
// {
//   id: "3",
//     roastType: "Light",
//       coffeeName: "Half City",
//   },
// {
//   id: "4",
//     roastType: "Medium",
//       coffeeName: "American",
//   },
// {
//   id: "5",
//     roastType: "Medium",
//       coffeeName: "City",
//   },
// {
//   id: "6",
//     roastType: "Medium",
//       coffeeName: "Breakfast",
//   },
// {
//   id: "7",
//     roastType: "Dark",
//       coffeeName: "French",
//   },
// {
//   id: "8",
//     roastType: "Dark",
//       coffeeName: "Italian",
//   },
// {
//   id: "9",
//     roastType: "Dark",
//       coffeeName: "Spanish",
//   },


exports.create = (newTradeItem) => {
  tradeItems.push(newTradeItem);
};

exports.find = () => tradeItems;

exports.findById = (id) => tradeItem.find((tradeItem) => tradeItem.id === id);

exports.updateById = function (id, newTradeItem) {
  let = stories.find((story) => story.id === id);
  if (story) {
    story.title = newStory.title;
    story.content = newStory.content;
    return true;
  } else {
    return false;
  }
};

exports.deleteById = function (id) {
  let index = tradeItem.findIndex((story) => story.id === id);
  if (index !== -1) {
    stories.splice(index, 1);
    console.log("deleted");
    return true;
  } else {
    console.log("not deleted");
    return false;
  }
};

// Path: models/items.js



// exports.find = () => tradeItems;

// exports.findById = (id) => tradeItem.find((tradeItem) => tradeItem.id === id);

// exports.updateById = function (id, newTradeItem) {
//   let = stories.find((story) => story.id === id);
//   if (story) {
//     story.title = newStory.title;
//     story.content = newStory.content;
//     return true;
//   } else {
//     return false;
//   }
// };

// exports.deleteById = function (id) {
//   let index = tradeItem.findIndex((story) => story.id === id);
//   if (index !== -1) {
//     stories.splice(index, 1);
//     console.log("deleted");
//     return true;
//   } else {
//     console.log("not deleted");
//     return false;
//   }
// };
