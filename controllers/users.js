const { error400, error404, error500 } = require('../errors/errorText');

const User = require('../models/user.js');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      return res.status(200).send({ data: users });
    })
    .catch((err) => {
      return res.status(500).send({ error500 });
    });
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      return res.status(200).send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(404).send({ error404 });
      }
      return res.status(500).send({ error500 });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      return res.status(201).send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'ValidatorError') {
        return res.status(400).send({ error400 });
      }
      return res.status(500).send({ error500 });
    });
};

const updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about })
    .then((user) => {
      return res.status(201).send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(404).send({ error404 });
      }
      return res.status(500).send({ error500 });
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar })
    .then((user) => {
      return res.status(201).send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(404).send({ error404 });
      }
      return res.status(500).send({ error500 });
    });
};

module.exports = { getUsers, getUser, createUser, updateProfile, updateAvatar };
