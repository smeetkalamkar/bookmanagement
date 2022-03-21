const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    likes: { type: Number, required: true },
    email : {type : String, required : true, unique:true},
    coverImage: [{ type: String, required: false }]
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema);



