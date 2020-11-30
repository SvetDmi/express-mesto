const fsPromises = require('fs').promises;

// Попытка использовать рекомендованный в код-ревью try catch не удалась, при такой реализации все сломалось.
// В Слаке запрашивала помощь, сказали что catch должен быть только в контроллере (возможно я неправильно его сделала,
// или же проблема в том, что парсинг внутри then)
// const getDataFromFile = (pathToFile) => fsPromises.readFile(pathToFile, { encoding: 'utf-8' })

// .then((data) => {
//   try {
//     JSON.parse(data)
//   }
//   catch (err) {
//     console.log(err)
//   }
// }
// )

const getDataFromFile = (pathToFile) => {
  return fsPromises.readFile(pathToFile, { encoding: 'utf-8' })

    .then((data) => JSON.parse(data));
};


module.exports = getDataFromFile;
