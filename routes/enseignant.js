const express = require('express');
const router = express.Router();
const {
  registerRulesEns,
  loginRulesEns,
  validationEns,
} = require('../middlewares/Enseignant/auth_validator');
const isAuth = require('../middlewares/Enseignant/passport');
const controllers = require('../controllers/auth_ens');

// Register Enseignant
router.post(
  '/registerEns',
  registerRulesEns(),
  validationEns,
  controllers.registerEns
);

// Login Enseignant
router.post('/loginEns', loginRulesEns(), validationEns, controllers.loginEns);

// get current Enseignant
router.get('/currentEns', isAuth(), controllers.getCurrentEns);

module.exports = router;
