const express = require("express");
const router = express.Router();
const Aliean = require("../models/alieansModal");

//await and asyncs are quite important in network requests...very important!!!!!

//get request which return a json response
router.get("/", async (req, res) => {
  try {
    const alieans = await Aliean.find(); //this find method gets the whole collection of data in the database
    res.json(alieans); //the response in in json format
  } catch (err) {
    res.send("Coudn't fetch the data! " + err);
  }
});
//getting the results by id
router.get("/:id", async (req, res) => {
  try {
    const aliean = await Aliean.findById(req.params.id);
    res.json(aliean);
  } catch (err) {
    res.send(`error fetching the indivisual data  ${err}`);
  }
});

//patch request update some data elements inside the database
router.patch("/:id", async (req, res) => {
  try {
    const aliean = await Aliean.findById(req.params.id);
    aliean.name = req.body.name;
    const copy = await aliean.save();
    res.json(copy);
  } catch (err) {
    res.send("err");
  }
});
//post req to post data to database
router.post("/", async (req, res) => {
  //creating the new instance of the cuurent data model and making a new obj
  const aliean = new Aliean({
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

//a method to delete a item in database based on its id
router.delete("/:id", async (req, res) => {
  try {
    //selecting the document by id and removing it from the collection
    const alieans = await Aliean.findById(req.params.id);
    const result = await alieans.remove();
    res.json(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
