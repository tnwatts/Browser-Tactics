const User = require('../../models/user');
const Profile = require('../../models/profile');
const [Archetype] = require('../../models/archetype');
const Model = require('mongoose')
const Game = require('../../models/game');

module.exports = {
  create,
  getByUser,
  addPlayer2,
  updateGame,

//   update,
//   addPlayer,
};


async function create(req, res) {
    const profile = await Profile.findById(req.user._id)
    const game = await Game.create({p1: {
                                        profile: req.user._id
                                    }})
    const archetypes = await Archetype.find({cost: 0})
    let copies = []
    archetypes.forEach(function(a, idx){
        let arche = a.toObject()
        delete arche._id
        const unitStates = {...game.p1.units[idx], ...arche}
        const unitStates2 = {...game.p2.units[idx], ...arche}
        game.p1.units[idx] = unitStates
        game.p2.units[idx] = unitStates2
    })
    console.log(game)
 
    game.save();
    profile.gameStatus = 1;
    profile.save();
    res.json(game);
}


async function getByUser(req,res) {
    const game = await Game.findOne({$or : [ { 'p1.profile': req.user._id}, {'p2.profile': req.user._id} ]} )
    console.log(game)
    res.json(game)
}

async function addPlayer2(req,res) {
    const game = await Game.findOne({'p1.profile': req.user._id})
    const user = await Profile.findOne({name: req.params.id})
    console.log(game, user)
    game.p2.profile = user._id
    await game.save()
    res.json(game)
}

async function updateGame(req,res){
    console.log(req.body.gameState)
    let game = await Game.findById(req.params.gameId)
    game.p1.units = req.body.gameState.p1.units
    game.p2.units = req.body.gameState.p2.units
    game.phase = req.body.phase
    game.turn = req.body.turn
    game.save()
    res.json(game)
}