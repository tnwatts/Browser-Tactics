const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    wins: Number,
    losses: Number,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Profile", profileSchema);