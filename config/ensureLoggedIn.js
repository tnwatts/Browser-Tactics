module.exports = function(req, res, next) {
  // 401 is Unauthorized
  console.log(req.user)
  if (!req.user) return res.status(401).json('Unauthorized');
  next();
};