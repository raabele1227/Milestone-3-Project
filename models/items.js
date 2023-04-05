const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const itemSchema = newSchema({

  coffeeName: { type: String, required: [true, 'item name is required'] },
  coffeeCategory: { type: String, required: [true, 'item topic is required'] },
  details: { type: String, required: [true, 'details are required'] },
  roastType: { type: String, required: [true, 'roast type is required'] },
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

// collection name in database is "items"
module.exports = mongoose.model("Item", itemSchema);

// const Item = mongoose.model("Item", itemSchema);

// let items = newItem({
// _id: "5e9b9b9b9b9b9b9b9b9b9b9b",
// db.items.insertOne({ "coffeeName": "Cinnamon", "roastType": "Light", "details": "Cinnamon is a light roast coffee that is light brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a light roast coffee."})

// db.items.insertOne({ "coffeeName": "New England", "roastType": "Light", "details": "New England is a light roast coffee that is light brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a light roast coffee."})
// db.items.insertOne({ "coffeeName": "Half City", "roastType": "Light", "details": "Half City is a light roast coffee that is light brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a light roast coffee."})
// db.items.insertOne({ "coffeeName": "American", "roastType": "Medium", "details": "American is a medium roast coffee that is medium brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a medium roast coffee."})
//   db.items.insertOne({ "coffeeName": "City", "roastType": "Medium", "details": "City is a medium roast coffee that is medium brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a medium roast coffee."})
//   db.items.insertOne({ "coffeeName": "French", "roastType": "Dark", "details": "French is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee."})
//   db.items.insertOne({ "coffeeName": "Italian", "roastType": "Dark", "details": "Italian is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee."})
//     itemName: "New England",
//     itemTopic: "Light",
//     details: "New England is a light roast coffee that is light brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a lighter roast coffee.",
//     roastType: "Light",
//     coffeeName: "New England",
//   },
//   {
//     itemName: "Half City",
//     itemTopic: "Light",
//     details: "Half City is a light roast coffee that is light brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a lighter roast coffee.",
//     roastType: "Light",
//     coffeeName: "Half City",
//   },
//   {
//     itemName: "American",
//     itemTopic: "Medium",
//     details: "American is a medium roast coffee that is medium brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a medium roast coffee.",
//     roastType: "Medium",
//     coffeeName: "American",
//   },
//   {
//     itemName: "City",
//     itemTopic: "Medium",
//     details: "City is a medium roast coffee that is medium brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a medium roast coffee.",
//     roastType: "Medium",
//     coffeeName: "City",
//   },
//   {
//     itemName: "Breakfast",
//     itemTopic: "Medium",
//     details: "Breakfast is a medium roast coffee that is medium brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a medium roast coffee.",
//     roastType: "Medium",
//     coffeeName: "Breakfast",
//   },
//   {
//     itemName: "French",
//     itemTopic: "Dark",
//     details: "French is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
//     roastType: "Dark",
//     coffeeName: "French",
//   },
//   {
//     itemName: "Italian",
//     itemTopic: "Dark",
//     details: "Italian is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
//     roastType: "Dark",
//     coffeeName: "Italian",
//   }

//   items.validate()
//   .then(() => {
//     console.log("Validation passed");
//   })
//   .catch(err=>console.log(err.message));


  // {
  //   itemName: "Espresso",
  //   itemTopic: "Dark",
  //   details: "Espresso is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
  //   roastType: "Dark",
  //   coffeeName: "Espresso",
  // },
  // {
  //   itemName: "Viennese",
  //   itemTopic: "Dark",
  //   details: "Viennese is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
  //   roastType: "Dark",
  //   coffeeName: "Viennese",
  // },
  // {
  //   itemName: "New Orleans",
  //   itemTopic: "Dark",
  //   details: "New Orleans is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
  //   roastType: "Dark",
  //   coffeeName: "New Orleans",
  // },
  // {
  //   itemName: "Continental",
  //   itemTopic: "Dark",
  //   details: "Continental is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
  //   roastType: "Dark",
  //   coffeeName: "Continental",
  // },
  // {
  //   itemName: "High",
  //   itemTopic: "Dark",
  //   details: "High is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
  //   roastType: "Dark",
  //   coffeeName: "High",
  // },
  // {
  //   itemName: "New York",
  //   itemTopic: "Dark",
  //   details: "New York is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
  //   roastType: "Dark",
  //   coffeeName: "New York",
  // },
  // {
  //   itemName: "European",
  //   itemTopic: "Dark",
  //   details: "European is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
  //   roastType: "Dark",
  //   coffeeName: "European",
  // },
  // {
  //   itemName: "Full City",
  //   itemTopic: "Dark",
  //   details: "Full City is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
  //   roastType: "Dark",
  //   coffeeName: "Full City",
  // },
  // {
  //   itemName: "Russian",
  //   itemTopic: "Dark",
  //   details: "Russian is a dark roast coffee that is dark brown in color. It has a mild flavor and is a great choice for those who are new to coffee. It is also a great choice for those who prefer a dark roast coffee.",
  //   roastType: "Dark",
  //   coffeeName: "Russian",
  // },
  // {

// );




//   {
//     id: "1",
//     roastType: "Light",
//     coffeeName: "Cinnamon",
//   },




// exports.itemById = function (req, res, next, _id) {


//   {
//     _id: "1",
//       roastType; "Light",
//         coffeeName; "Cinnamon";

//   }
//   {
//     _id: "2",
//       roastType; "Light",
//         coffeeName; "New England"
//       ;
//   }
//   {
//     _id: "3",
//       roastType; "Light",
//         coffeeName; "Half City"
//       ;
//   }
//   {
//     _id: "4",
//       roastType; "Medium",
//         coffeeName; "American",
//       ;
//   }

//   {
//     _id: "5",
//       roastType; "Medium",
//         coffeeName; "City",
//       ;
//   }
//   {
//     _id: "6",
//       roastType; "Medium",
//         coffeeName; "Breakfast",
//       ;
//   }
//   {
//     _id: "7",
//       roastType; "Dark",
//         coffeeName; "French",
//       ;
//   }
//   {
//     _id: "8",
//       roastType; "Dark",
//         coffeeName; "Italian",
//       ;
//   }
//   {
//     _id: "9",
//       roastType; "Dark",
//         coffeeName; "Spanish",
//       ;
//   }

// };






//   roastType: "Light",
//     coffeeName: "Cinnamon",
// },
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


// exports.create = (newTradeItem) => {
//   tradeItems.push(newTradeItem);
// };

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
