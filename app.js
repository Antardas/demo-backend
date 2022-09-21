const express = require("express");

const app = express();

// Middleware
app.use(express.json());

const mongoose = require("mongoose");
const quotesSchema = new mongoose.Schema({
  quote: String,
  author: String,
});

const Quote = mongoose.model("Quote", quotesSchema);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/quote", async (req, res, next) => {
  const quote = await Quote.find({});
  res.status(200).json({
    status: "success",
    data: {
      quote: quote[0],
    },
  });
});

app.post("/quote", async (req, res, next) => {
  await Quote.find({}).deleteOne();

  const quote = await Quote.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      quote: quote[0],
    },
  });
});

module.exports = app;
