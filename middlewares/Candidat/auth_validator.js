const { check, validationResult } = require('express-validator');
exports.registerRules = () => [
  check('name', 'name is required').notEmpty(),
  check('lastName', 'lastName is required').notEmpty(),
  check('email', 'email is required').notEmpty().isEmail(),
  check('password', 'password is required').notEmpty().isLength({
    min: 8,
    max: 15,
  }),
];

exports.loginRules = () => [
  check('email', 'email is required').notEmpty(),
  check('email', 'email should respect the form').isEmail(),
  check('password', 'password must have 8 digits minimum').notEmpty(),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map(el => ({
        msg: el.msg,
      })),
    });
  }
  next();
};
