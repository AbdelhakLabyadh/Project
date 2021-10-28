const Enseignant = require('../../models/Enseignant');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SecretOrKey,
};
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const enseignant = await Enseignant.findOne({
        _id: jwt_payload._id,
      }).select('-password');
      enseignant ? done(null, enseignant) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);

module.exports = isAuth = () =>
  passport.authenticate('jwt', { session: false });
