const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    pOne: { type: Schema.Types.ObjectId, ref: "Profile" },
    pTwo: { type: Schema.Types.ObjectId, ref: "Profile" },
    p1Units: [Archetype],
    p2Units: [Archetype],
    p1UnitDamage: {type: [Number], default: 0},
    p2UnitDamage: {type: [Number], default: 0},
    p1UnitPosX: {type: [Number], default: 0},
    p1UnitPosY: {type: [Number], default: 0},
    p2UnitPosX: {type: [Number], default: 0},
    p2UnitPosY: {type: [Number], default: 0},
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Game", gameSchema);