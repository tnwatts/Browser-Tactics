const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    p1: {
      profile: { type: Schema.Types.ObjectId, ref: "Profile" },
      units: {
        type: [{}],
        default: [
          { injuries: 0, pos: [4, 2] },
          { injuries: 0, pos: [5, 5] },
          { injuries: 0, pos: [4, 9] },
        ],
      },
    },
    p2: {
      profile: { type: Schema.Types.ObjectId, ref: "Profile" },
      units: {
        type: [{}],
        default: [
          { injuries: 0, pos: [17, 2] },
          { injuries: 0, pos: [16, 5] },
          { injuries: 0, pos: [17, 9] },
        ],
      },
    },
    turn: { type: Number, default: 0 },
    phase: { type: Number, default: 0 }, // 0-setup, 1-playing, 2-finished
    winner: { type: Number, default: 0 }, //0 for no winner, 1 for pOne, 2 for pTwo
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Game", gameSchema);
