const express = require("express");
const router = express.Router();
const alieanSchema = require("../models/alieansModal");

//get request which return a json response
router.get("/", async (req, res) => {
  try {
    const alieans = await alieanSchema.find(); //this find method gets the whole collection of data in the database
    res.json(alieans); //the response in in json format
  } catch (err) {
    res.send("Coudn't fetch the data! " + err);
  }
});

//post req to post data to database
router.post("/", async (req, res) => {
  //creating the new instance of the cuurent data model and making a new obj
  const aliean = new alieanSchema({
    name: req.body.name,
    tech: req.body.tech,
    subscribed: req.body.subscribed,
  });
  //saving that object into the database
  try {
    const a1 = await aliean.save();
    //sending this data to make that it has data
    res.send(a1);
  } catch (err) {
    res.send("error " + err);
  }
});

module.exports = router;
