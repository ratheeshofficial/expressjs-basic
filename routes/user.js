const express = require("express");

const router = express.Router();

// UI -> Request => API => Middleware => Handler
// Middle ware used for login/ Authentication most commonly used for that

router.use("/", (req, res, next) => {
  console.log("Api Call Recieved");
  next();
});

router.get("/", (req, res, next) => {
  res.send("Get User Details");
  next();
});

router.use("/", (req, res) => {
  console.log("Api Call Ended");
});

// middleware ended

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
});

router.get("/search-by-location/:state/:city", (req, res) => {
  const state = req.params.state;
  const city = req.params.city;
  res.send(state + city);
});

router.get("/search/:key([0-9]{4})", (req, res) => {
  const key = req.params.key;
  res.send(`Data Captures is ${key}`);
});

router.get("/search-username/:key([a-zA-Z]{5})", (req, res) => {
  const name = req.params.key;
  res.send(`Data Captures is ${name}`);
});

router.get("*", (req, res) => {
  const obj = {
    statusCode: "404",
    statusMessage: "URL not Found",
  };
  res.send(`${obj.statusCode} ${obj.statusMessage}`);
});

module.exports = router;
