const Archetype = require('../../models/archetype');
module.exports = {
  seed,
  index,
  show,
};


async function index(req, res) {
  const archetypes = await Item.find({}).sort('name').exec();
  res.json(archetypes);
}

async function show(req, res) {
  const archetype = await Item.findById(req.params.id);
  res.json(archetype);
}


// IIFE
async function seed() {

    await Archetype.deleteMany({});
    const items = await Archetype.create([
      {name: 'Barbarian', hp: 70, attackMultiplier: 1.3, movement: 4, cost: 0},
      {name: 'Knight', hp: 70, attackMultiplier: 1.1, movement: 5, cost: 0}
    ]);
    // console.log(items)
  }
  