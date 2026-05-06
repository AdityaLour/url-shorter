require("dotenv").config();
const express = require("express");
const PORT = 5000;
const connectDb = require("./db/database");
const URL = require("./model/url.schema");
const getNextSequence = require("./util/getNextSequence");
const conversionbase62 = require("./util/base62");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/shorten", async (req, res) => {
  try {
    let { url } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "URL is missing",
      });
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    const id = await getNextSequence("urlCounter");

    const shortCode = conversionbase62(id);

    const newUrl = await URL.create({
      originalUrl: url,
      shortCode: shortCode,
    });

    res.status(201).json({
      shortUrl: `${process.env.BASE_URL}/${shortCode}`,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is Running");
  });
});
