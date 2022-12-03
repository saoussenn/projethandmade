const express = require("express");
const product = require("../models/product");
const productType = require("../models/productType");
const router = express.Router();

// add product
router.post("/addproduct", async (req, res) => {
  try { 
    const newProduct = new product(req.body);
    let result = await newProduct.save();
    res.send({ result: result, msg: "product added" });
  } catch (error) {
    console.log(error);
  }
});

// // add product type
// router.post("/addType", async (req, res) => {
//   const { ProdType } = req.body;
//   try {
//     const searchedType = await productType.findOne({ ProdType });
//     if (searchedType) {
//       return res.status(400).send({ msg: "Type already exist" });
//     }
//     const newType = new productType({
//       ProdType,
//     });
//     let result = await newType.save();
//     res.send({ result: result, msg: "Type added" });
//   } catch (error) {
//     console.log(error);
//   }
// });

// get all products
router.get("/allproducts", async (req, res) => {
  try {
    let result = await product.find();

    res.send({ products: result, msg: "all products" });
  } catch (error) {
    console.log(error);
  }
});
// get  product by filter
router.post("/productFilter", async (req, res) => {
  try {
    let result = await product.find(req.body);

    res.send({ productSearched: result, msg: "all products" });
  } catch (error) {
    console.log(error);
  }
});
// update product
router.put("/update/:id", async (req, res) => {
  try {
    let result = await product.findByIdAndUpdate({_id:req.params.id}, {$set: req.body}, {new:true});

    res.send({ product: result, msg: " product updated" });
  } catch (error) {
    console.log(error);
  }
});
//get product by id

router.get("/get/:id", async (req, res) => {
  try {
    let result = await product.findById(req.params.id);
    res.send({ product: result, msg: " product by id" });
  } catch (error) {
    console.log(error);
  }
});
// delete product
router.delete("/delete/:id", async (req, res) => {
  try {
    let result = await product.findByIdAndDelete(req.params.id);

    res.send({  msg: " product deleted" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
