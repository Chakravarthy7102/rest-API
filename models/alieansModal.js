const mongoose = require("mongoose");

//this is how you create a data schema for mongodb using mongoose
//this will create a map in which the furhter data will be stored
//in this same format of fields

const alieanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  subscribed: {
    type: Boolean,
    required: true,
    default: false,
  },
});
//exporting this schema to perform crud operations from routes.
module.exports = mongoose.model("alieanSchema", alieanSchema);
