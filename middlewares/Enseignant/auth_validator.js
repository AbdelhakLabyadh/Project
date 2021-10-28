const { check, validationResult } = require('express-validator');

exports.registerRulesEns = () => [
  check('name', 'name is required').notEmpty(),
  check('numeroCIN', 'numeroCIN is required')
    .notEmpty()
    .isLength({ min: 8, max: 8 }),
  check('subject', 'subject is required').notEmpty(),
  check('email', 'email is required').notEmpty().isEmail(),
  check('password', 'password is required').notEmpty().isLength({
    min: 8,
    max: 15,
  }),
];

exports.loginRulesEns = () => [
  check('numeroCIN', 'email is required').notEmpty(),
  check('numeroCIN', 'email should respect the form').isNumeric(),
  check('password', 'password must have 8 digits minimum').notEmpty(),
];

exports.validationEns = (req, res, next) => {
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
