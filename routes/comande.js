const express = require("express");
const comande = require("../models/comande");
const router = express.Router();

router.post("/comande", async (req, res) => {
  const { userId, Product } = req.body;
  try {
    const newComande = new comande({
      userId,
      Product,
    });
    let result = await newComande.save();
    res.send({ result: result, msg: "comande added" });
  } catch (error) {
    console.log(error);
  }
});

// validate comande
router.put("/validate/:id", async (req, res) => {
  try {
    var result = await comande.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { isValid: true } },
      { new: true }
    );

    res.send({ result: result, msg: "validation comande" });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

// delete comande
//Delete file
router.delete("/delete/:id", async (req, res) => {
  try {
    let toDelete = await comande.findOneAndDelete({
      _id: req.params.id,
    });

    res.send({ result: toDelete, msg: "Deleted successfully" });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

module.exports = router;
