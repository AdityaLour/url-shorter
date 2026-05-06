const mongoose = require("mongoose");
const { timeStamp } = require("node:console");
const { type } = require("node:os");

const { Schema } = mongoose;

const UrlSchmea = new Schema(
  {
    orignalUrl: {
      type: String,
      required: true,
      trim: true,
    },

    shorturl: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timeStamp: true },
);

module.exports = mongoose.model("Url", UrlSchmea);
