const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    content: String,
    name: String,
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model("messages", messageSchema);
