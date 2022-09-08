const Archetype = require('../../models/archetype');
const Game = require('../../models/game');
const User = require('../../models/user');
const Profile = require('../../models/profile');
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
    await Game.deleteMany({});
    await User.deleteMany({});
    await Profile.deleteMany({});
    const items = await Archetype.create([
      {name: 'Ug', archetype: 'Barbarian', hp: 70, attackMultiplier: 1.3, movement: 4, cost: 0, image: "https://i.imgur.com/uFcF0FK.png"},
      {name: 'Gregory', archetype: 'Armored Protector', hp: 85, attackMultiplier: 1.1, movement: 3, cost: 0, image: "https://i.imgur.com/w7y4lXj.png"},
      {name: 'Ned', archetype: 'Rat King' , hp: 60, attackMultiplier: 1.3, movement: 6, cost: 0, image: "https://i.imgur.com/rq39A3m.png"}
    ]);
    // console.log(items)
  }
  