const express = require('express');
const router = express.Router();
const {
  loginRules,
  registerRules,
  validation,
} = require('../middlewares/Candidat/auth_validator');
const isAuth = require('../middlewares/Candidat/passport');
const controllers = require('../controllers/auth');

router.get('/', (req, res) => {
  res.send('hellooooo');
});

// Register Student
router.post('/register', registerRules(), validation, controllers.register);

// Login Student
router.post('/login', loginRules(), validation, controllers.login);

// get current Student
router.get('/current', isAuth(), controllers.getCurrentUser);

module.exports = router;
