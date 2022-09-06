const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Profile = require('../../models/profile');
const Archetype = require('../../models/archetype');

module.exports = {
  create,
  login,
  update,
  profile,
};

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error('Invalid Credentials');
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error('Invalid Credentials');
    const token = createJWT(user);
    res.json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const profile = await Profile.create({_id : user._id, name: user.name});
    const archetypes = await Archetype.find({cost:0})
    archetypes.forEach(function (a){
      a.owners.push(profile._id)
      a.save();
    })
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}


async function update(req, res) {
  const profile = Profile.findById(req.user._id)
  await profile.save();
  res.json(profile);
}

async function profile(req,res) {
  const profile = await Profile.findById(req.params.id)
  res.json(profile);
}



/*--- Helper Functions ---*/

function createJWT(user) {
  return jwt.sign(
    // additional data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

