const error400 = { message: 'Миссия невыполнима, проверьте правильность введенных данных' };
const error500 = { message: 'Сервер не отвечает, попробуйте позже' };
const error404 = { message: 'Миссия невыполнима, запрашиваемый ресурс не найден' };


module.exports = { error400, error404, error500 };
