const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, lastName, email, password, role } = req.body;
  try {
    const newUser = new User({
      name,
      lastName,
      email,
      password,
      role,
    });

    // check if the email exist
    const fetchedUser = await User.findOne({ email });
    if (fetchedUser) {
      return res.status(400).send({ msg: 'email already exists', email });
    }

    // crypting the password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashedPassword;

    // save the user
    const newUserToken = await newUser.save();
    // generate a token
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey);
    res.status(200).send({
      user: newUserToken,
      msg: 'user is saved...',
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send('can not register the user');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exists
    const fetchUser = await User.findOne({ email });
    // if the email doesn't exist
    if (!fetchUser) {
      return res.status(400).send({ msg: 'bad credential' });
    }
    // passwords are the same??!!
    const match = await bcrypt.compare(password, fetchUser.password);

    if (!match) {
      return res.status(400).send({ msg: 'bad credential...' });
    }

    // writing the token
    const payload = {
      _id: fetchUser._id,
      name: fetchUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey);

    // send the user
    res
      .status(200)
      .send({ user: fetchUser, msg: 'success', token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'user not found' });
  }
};

exports.getCurrentUser = async (req, res) => {
  res.status(200).send({ user: req.user });
};
