const path = require('path');
const getDataFromFile = require('../helpers/files.js');

const cardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => getDataFromFile(cardsDataPath)
  .then((cards) => {
    if (!cards) {
      return res.status(404).send({ message: 'Информация не найдена' });
    }
    return res.status(200).send(cards);
  })
  .catch((err) => res.status(500).send({ message: 'Ошибка сервера' }));

module.exports = { getCards };
