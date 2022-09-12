const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const archetypeSchema = new Schema({
    name: String,
    archetype: String,
    hp: Number,
    attackMultiplier: Number,
    range: {type: Number, default: 1},
    movement: {type: Number, defatul: 3},
    cost: {type: Number, default: 0},
    image: String,
    owners: {
      type: [Schema.Types.ObjectId],
      ref: "Profile",
      default: [],
    },
    
  });
  
  module.exports = [mongoose.model("Archetype", archetypeSchema), archetypeSchema];
  