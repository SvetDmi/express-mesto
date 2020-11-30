const path = require('path');
const getDataFromFile = require('../helpers/files.js');

const usersDataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => getDataFromFile(usersDataPath)
  .then((users) => {
    if (!users) {
      return res.status(404).send({ message: 'Информация не найдена' });
    }
    return res.status(200).send(users);
  })
  .catch((err) => res.status(500).send({ message: 'Ошибка сервера' }));

const getUserProfile = (req, res) => getDataFromFile(usersDataPath)
  .then((users) => users.find((user) => user._id === req.params.id))
  .then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    return res.status(200).send(user);
  })
  .catch((err) => res.status(500).send({ message: 'Ошибка сервера' }));

module.exports = { getUsers, getUserProfile };
