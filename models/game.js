const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Profile = require('./profile')
const Archetype = require('./archetype')

const gameSchema = new Schema({
    players: {
        type: [Schema.Types.ObjectId],
        ref: "Profile",
        default: [],
      },
    units: {
        type: [[Schema.Types.ObjectId],[Schema.Types.ObjectId]],
        ref: "Archetype",
        default: [[],[]],
      },
    UnitDamage: {type: [[Number],[Number]], default: [[],[]]},
    UnitPos: {type: [[Number,Number],[Number,Number]], default: [[],[]]}, //xy position for player1-0 and player2-0
    phase: {type: Number, default: 0}, // 0-setup, 1-playing, 2-finished
    winner: {type: Number, default: 0}, //0 for no winner, 1 for pOne, 2 for pTwo
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Game", gameSchema);