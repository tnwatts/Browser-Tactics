const User = require('../../models/user');
const Profile = require('../../models/profile');
const Archetype = require('../../models/archetype');
const Game = require('../../models/game');

module.exports = {
  create,
  show,
//   update,
//   addPlayer,
};


async function create(req, res) {
    const profile = await Profile.findById(req.user._id)
      const game = await Game.create({players: [req.user._id]})
      units = await Archetype.find({owners: req.user._id})
      game.units.push(...units)
      game.save();
      profile.inGame = true;
      profile.save();
      res.json(game);
}

async function show(req,res) {
    const profile = await Profile.findById(req.user._id)
    res.json(profile);
}

