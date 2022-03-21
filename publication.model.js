const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema(
  {
    pubName: { type: String, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("publication", publicationSchema);

