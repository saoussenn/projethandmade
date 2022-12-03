const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const ObjectID = require("mongoose").Types.ObjectID;
const {
  loginRules,
  validation,
  registerRules,
} = require("../middelwares/validator");

const isAuth = require("../middelwares/passport");

//login

router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the user exists
    const searchedUser = await User.findOne({ email });
    //find if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    //passwords are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // create a token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 100000,
    })

//send the user
res
  .status(200)
  .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
  res.status(500).send({ msg: "cannot find the user" });
  console.log(error);
}
});

// register the user
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastName, email, password, isAdmin, phone } = req.body;
  try {
    const newUser = new User({
      name,
      lastName,
      email,
      password,
      isAdmin,
      phone,
    });

    // check if the email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashedPassword;

    //save the user
    const newUserToken = await newUser.save();
    res.send({ result: newUserToken, msg: "user added" });
  } catch (error) {
    res.status(500).send(" can not save the user...");
    console.log(error);
  }
});
// get user by id
router.get("/get/:id", async (req, res) => {
  // if (!ObjectID.isValid(req.params.id))
  //   return res.status(400).send("ID unknown : " + req.params.id);

  try {
    const result = await User.findById(req.params.id);
    res.status(200).send({ user: result, msg: "user trouve" })


  } catch (error) {
    console.log(error);

  }
});

// get all user
router.get("/getall", async (req, res) => {
  console.log('aya 7aja')
  try {
    let result = await User.find()
    res.send({ users: result, msg: "all users" });

  } catch (error) {
    console.log(error);
  }
});


//Put methode update user
router.put("/update/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ newProfile: result, msg: "profile updated.." });
  } catch (error) {
    res.status(500).send("cannot update the profile..");
    console.log(error);
  }
});
//Put methode update user password
router.put("/updatePassword/:id", async (req, res) => {
  try {
    const newPassword = req.body.password;
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(newPassword, genSalt);

    let result = await User.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { password: hashedPassword } },
      { new: true }
    );
    res.status(200).send({ newPassword: result, msg: "password updated.." });
  } catch (error) {
    res.status(500).send("cannot update the profile..");
    console.log(error);
  }
});

//get methode current user
router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;
