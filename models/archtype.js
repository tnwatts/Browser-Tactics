

const archtypeSchema = new Schema({
    name: String,
    hp: Number,
    attackMultiplier: Number,
    movement: Number,
    users: {
      type: [Schema.Types.ObjectId],
      ref: "Profile",
      default: [],
    },
  });
  
  module.exports = mongoose.model("Archtype", archtypeSchema);
  