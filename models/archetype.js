const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const archetypeSchema = new Schema({
    name: String,
    hp: Number,
    attackMultiplier: Number,
    movement: Number,
    cost: Number,
    owners: {
      type: [Schema.Types.ObjectId],
      ref: "Profile",
      default: [],
    },
    
  });
  
  module.exports = mongoose.model("Archetype", archetypeSchema);
  