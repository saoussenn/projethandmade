const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductSchema = new schema(
  {
    ProdName: {
      type: String,
      required: true,
    },
    ProdType: {
      type: String,
      required: true,
    },
    gallerie: {
      type: String,
  
    },
    Price: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
     
    },
    quantity: {
      type: Number,
      required: true,
 
    },

    fils: {
      type: String,
    },

    toiles: {
      type: String,
    },

    accessoires: {
      type: String,
    },

    support: {
      type: String,
    },

    description: {
      type: String,
    },

    

    livraison: {
      type: String,
    },


  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
