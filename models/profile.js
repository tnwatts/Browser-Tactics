const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    wins: {type: Number, default: 0},
    losses: {type: Number, default: 0},
    gameStatus: {type: Number, default: 0}, //0- not in game, 1-player1, 2-player2
    messages: [{}],
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Profile", profileSchema);