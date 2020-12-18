const { error400, error404, error500 } = require('../errors/errorText');

const Card = require('../models/card.js');

const createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => {
      return res.status(201).send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'Client Error') {
        return res.status(400).send({ error400 });
      }
      return res.status(500).send({ error500 });
    });
};

const getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => {
      if (!cards) {
        return res.status(404).send({ error404 });
      }
      return res.status(200).send({ data: cards });
    })
    .catch((err) => res.status(500).send({ error500 }));
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params._id)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ error404 });
      }
      return res.status(201).send({ data: card })
    })
    .catch((err) => res.status(500).send({ error500 }));
};

const putLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params._id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (!card) {
        return res.status(404).send({ error404 });
      }
      return res.status(201).send({ data: card });
    })
    .catch((err) => res.status(500).send({ error500 }));
};

const deleteLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params._id,
    { $pull: { likes: req.user._id } },
    { new: true })

    .then((card) => {
      if (!card) {
        return res.status(404).send({ error404 });
      }
      return res.status(201).send({ data: card });
    })
    .catch((err) => res.status(500).send({ error500 }));
};

module.exports = { getCards, createCard, deleteCard, putLike, deleteLike };
