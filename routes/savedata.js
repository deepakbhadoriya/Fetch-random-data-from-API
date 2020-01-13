const express = require("express");
const cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");

//calling models
let dataStruct = require("../models/datastruct");

//router to add new data
router.post("/", (req, res) => {
  const webdata = req.body.webdata;
  const currentdate = req.body.currentdate;

  const newdata = new dataStruct({ webdata, currentdate });

  newdata
    .save()
    .then(() => res.json("Data added Successfully!"))
    .catch(err => res.status(400).json("Error:" + err + webdata));
});

module.exports = router;
