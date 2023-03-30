const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = [
  {
    id: "1",
    roastType: "Light",
    coffeeName: "Cinnamon",
  },
  {
    id: "2",
    roastType: "Light",
    coffeeName: "New England",
  },
  {
    id: "3",
    roastType: "Light",
    coffeeName: "Half City",
  },
  {
    id: "4",
    roastType: "Medium",
    coffeeName: "American",
  },
  {
    id: "5",
    roastType: "Medium",
    coffeeName: "City",
  },
  {
    id: "6",
    roastType: "Medium",
    coffeeName: "Breakfast",
  },
  {
    id: "7",
    roastType: "Dark",
    coffeeName: "French",
  },
  {
    id: "8",
    roastType: "Dark",
    coffeeName: "Italian",
  },
  {
    id: "9",
    roastType: "Dark",
    coffeeName: "Spanish",
  },
];

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
