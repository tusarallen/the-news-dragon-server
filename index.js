const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require("./data/catagories.json");

app.get("/", (req, res) => {
  res.send("Dragon is running");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.listen(port, () => {
  console.log(`Dargon API is running on port: ${port}`);
});
