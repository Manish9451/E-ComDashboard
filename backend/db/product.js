const mongooese = require("mongoose");

const productSchema = new mongooese.Schema({
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String,
});

module.exports = mongooese.model("products", productSchema);
