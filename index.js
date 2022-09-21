const express = require("express");
const app = express();
const mongoose = require("mongoose"); // step 1

const user = require("./routes/user");
const product = require("./routes/product");
// step 2 Create file properties.js
const dbURL = require("./properties").DB_URL; // step 3

mongoose.connect(dbURL); //step 4

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB using MongooseJS");
});

app.use("/user", user);
app.use("/product", product);

app.listen(4000, console.log("server is started 4000..."));
