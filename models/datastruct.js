const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const datastructSchema = new Schema(
  {
    webdata: { type: String, required: true },
    currentdate: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const datastruct = mongoose.model("datastruct", datastructSchema);

module.exports = datastruct;
