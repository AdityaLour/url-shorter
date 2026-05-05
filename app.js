require("dotenv").config();
const express = require("express");
const PORT = 5000;
const router = express.Router();
const connectDb = require("./db/database");


const app = express();
app.use(express.static("public"))

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is Running");
  });
});
