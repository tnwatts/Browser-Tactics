const Profile = require("../../models/profile");
const [Archetype] = require("../../models/archetype");
const Game = require("../../models/game");

module.exports = {
  create,
  getByUser,
  addPlayer2,
  updateGame,
  deleteGame,
};

async function create(req, res) {
  const profile = await Profile.findById(req.user._id);
  const game = await Game.create({
    p1: {
      profile: req.user._id,
    },
  });
  const archetypes = await Archetype.find({ cost: 0 });
  let copies = [];
  archetypes.forEach(function (a, idx) {
    let arche = a.toObject();
    delete arche._id;
    const unitStates = { ...game.p1.units[idx], ...arche };
    const unitStates2 = { ...game.p2.units[idx], ...arche };
    game.p1.units[idx] = unitStates;
    game.p2.units[idx] = unitStates2;
  });
  console.log(game);

  game.save();
  profile.gameStatus = 1;
  profile.save();
  res.json(game);
}

async function getByUser(req, res) {
  const game = await Game.findOne({
    $or: [{ "p1.profile": req.user._id }, { "p2.profile": req.user._id }],
  });
  res.json(game);
}

async function addPlayer2(req, res) {
  const game = await Game.findOne({ "p1.profile": req.user._id });
  const user = await Profile.findOne({ name: req.params.id });
  game.p2.profile = user._id;
  user.gameStatus = 1;
  await user.save();
  await game.save();
  res.json(game);
}

async function updateGame(req, res) {
  console.log(req.body.gameState, "gamestate");
  let game = await Game.findById(req.params.gameId);
  console.log(game, "game");
  game.p1.units = req.body.gameState.p1.units;
  game.p2.units = req.body.gameState.p2.units;
  game.phase = req.body.gameState.phase;
  game.turn = req.body.gameState.turn;
  game.save();
  res.json(game);
}

async function deleteGame(req, res) {
  let game = await Game.findById(req.params.id);
  let p1 = await Profile.findById(game.p1.profile);
  let p2 = await Profile.findById(game.p2.profile);
  p1.gameStatus = 0;
  p1.wins += 1;
  p2.gameStatus = 0;
  p2.losses += 1;
  p1.save();
  p2.save();
  Game.deleteOne({ _id: game._id }, function (err) {
    if (err) {
      console.log(err);
      return handleError(err);
    }
  });
  console.log(p1, p2);

  res.json("");
}
