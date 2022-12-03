const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductTypeSchema = new schema({
  ProdType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ProductType", ProductTypeSchema);
