const express = require("express");
const mongoose = require("mongoose");
const alieanRouter = require("./routes/alieans");
//url for connecting to the database
const url = "mongodb://localhost/AlieanDb";

const app = express();
//connecting to the mongodb server
//useNewUrlParser: true just to make sure that we dont get any unwanted warnings and to keep the terminal clean
mongoose.connect(url, { useNewUrlParser: true });
//getting the instance of the connect to perform mans
const con = mongoose.connection;
//opening the connection
con.on("open", () => {
  console.log("the connection is opened!");
});

//solved the TypeError: Cannot read properties of undefined (reading 'name') error
app.use(express.json());

//routing the req using middlewares
//alieans
app.use("/alieans", alieanRouter);

//listening to the app at port number 3000 local host
app.listen(3000, () => {
  console.log("the server is running on the local machine!");
});
