const User = require('../../models/user');
const Profile = require('../../models/profile');
const Archetype = require('../../models/archetype');
const Game = require('../../models/game');

module.exports = {
  create,
  getByUser,
  addPlayer2,

//   update,
//   addPlayer,
};


async function create(req, res) {
    const profile = await Profile.findById(req.user._id)
      const game = await Game.create({players: [req.user._id]})
      game.save();
      profile.gameStatus = 1;
      profile.save();
      res.json(game);
}


async function getByUser(req,res) {
    const game = await Game.findOne({user: req.user._id})
    res.json(game)
}

async function addPlayer2(req,res) {
    const game = await Game.findOne({user: req.user._id})
    const profile = await Profile.findById(req.params)

    console.log(game)
    console.log(profile)
    game.players.push(profile._id)
    return
}