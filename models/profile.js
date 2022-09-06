const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    wins: {type: Number, default: 0},
    losses: {type: Number, default: 0},
    inGame: {type: Boolean, default: false},
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Profile", profileSchema);