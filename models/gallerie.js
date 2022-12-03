const mongoose = require("mongoose");
const schema = mongoose.Schema;

const GallerieSchema = new schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallerie", GallerieSchema);
