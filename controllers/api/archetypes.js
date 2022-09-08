const Archetype = require('../../models/archetype');
module.exports = {
  seed,
  index,
  show,
  usersList
};


async function usersList(req,res){
  const archetypes = await Archetype.find({owners: req.params.id })
  res.json(archetypes)
}

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
      {name: 'Barbarian', hp: 70, attackMultiplier: 1.3, movement: 4, cost: 0, image: "https://i.imgur.com/uFcF0FK.png"},
      {name: 'Knight', hp: 75, attackMultiplier: 1.2, movement: 5, cost: 0, image: "https://i.imgur.com/uFcF0FK.png"},
      {name: 'Scoundrel', hp: 55, attackMultiplier: 1.3, movement: 6, cost: 0, image: "https://i.imgur.com/uFcF0FK.png"}
    ]);
    // console.log(items)
  }
  