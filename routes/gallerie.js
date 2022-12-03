const express = require("express");
const gallerie = require("../models/gallerie");
const router = express.Router();

// add images to product
router.post("/addimage", async (req, res) => {
  const { productId, url } = req.body;
  try {
    const newImage = new gallerie({ productId, url });
    let result = await newImage.save();
    res.send({ result: result, msg: "image added" });
  } catch (error) {
    res.status(400).send({ msg: "can not add image" });
    console.log(error);
  }
});

//get images by productId
router.get("/productImage/:id", async (req, res) => {
  try {
    const media = await gallerie.find({ productId: req.params.id });
    res.send({ media: media, msg: "media fetched" });
  } catch (error) {
    res.status(400).send({ msg: "can not get media" });
  }
});

// delete image
router.delete("/delete/:id", async (req, res) => {
  try {
    let toDelete = await gallerie.findOneAndDelete({
      _id: req.params.id,
    });

    res.send({ result: toDelete, msg: "Deleted successfully" });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

module.exports = router;
