const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require("./data/catagories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Dragon is running");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/catagories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (id === 0) {
    res.send(news);
  } else {
    const catagoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(catagoryNews);
  }
});

app.listen(port, () => {
  console.log(`Dargon API is running on port: ${port}`);
});
