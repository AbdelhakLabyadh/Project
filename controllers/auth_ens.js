const Enseignant = require('../models/Enseignant');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerEns = async (req, res) => {
  const { name, numeroCIN, subject, email, password } = req.body;
  try {
    const newEns = new Enseignant({
      name,
      numeroCIN,
      subject,
      email,
      password,
    });

    // check if the email exist
    const fetchedEnseignant = await Enseignant.findOne({ numeroCIN });
    if (fetchedEnseignant) {
      return res
        .status(400)
        .send({ msg: 'Numero CIN already exists', numeroCIN });
    }

    // crypting the password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newEns.password = hashedPassword;

    // save the Enseignant
    const newEnseignantToken = await newEns.save();
    // generate a token
    const payload = {
      _id: newEnseignantToken._id,
      name: newEnseignantToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    res.status(200).send({
      enseignant: newEnseignantToken,
      msg: 'Enseignant is saved...',
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send('can not register the Enseignant');
  }
};

exports.loginEns = async (req, res) => {
  const { numeroCIN, password } = req.body;
  try {
    // find if the Enseignant exists
    const fetchEnseignant = await Enseignant.findOne({ numeroCIN });
    // if the numeroCIN doesn't exist
    if (!fetchEnseignant) {
      return res.status(400).send({ msg: 'bad credential' });
    }
    // passwords are the same??!!
    const match = await bcrypt.compare(password, fetchEnseignant.password);

    if (!match) {
      return res.status(400).send({ msg: 'bad credential...' });
    }

    // writing the token
    const payload = {
      _id: fetchEnseignant._id,
      name: fetchEnseignant.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });

    // send the Enseignant
    res.status(200).send({
      enseignant: fetchEnseignant,
      msg: 'success',
      token: `Bearer ${token}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'Enseignant not found' });
  }
};

exports.getCurrentEns = async (req, res) => {
  res.status(200).send({ enseignant: req.enseignant });
};
