const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ComandeSchema = new schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    Product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    isValid: false,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comande", ComandeSchema);
