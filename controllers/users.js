const { error400, error404, error500 } = require('../errors/errorText');

const User = require('../models/user.js');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send({ data: users }))
    .catch((err) => res.status(500).send(error500));
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(404).send(error404);
      }
      return res.status(500).send(error500);
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send(error400);
      }
      return res.status(500).send(error500);
    });
};

const updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about },
    {
      new: true,
      runValidators: true,
    })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send(error400);
      } else if (err.name === 'CastError') {
        return res.status(404).send(error404);
      }
      else { return res.status(500).send(error500) };
    });
};


const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar },
    {
      new: true,
      runValidators: true,
    })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send(error400);
      }
      else if (err.name === 'CastError') {
        return res.status(404).send(error404);
      }
      else { return res.status(500).send(error500) };
    });
};

// линтер очень ругался на else после return, сейчас я его переубедила, надеюсь новых критических замечаний не заработала

module.exports = { getUsers, getUser, createUser, updateProfile, updateAvatar };
