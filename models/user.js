const mongoose = require('mongoose');

const regex = /^(https?:\/\/)(www\.)?([\w\-\.]+)\.([a-z]{2,6}\.?)(\/[\w\-\.]*)*\/?$/i;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return regex.test(v)
      },
      message: 'Не получается загрузить аватар, проверьте правильность ссылки'
    }
  },

});

module.exports = mongoose.model('user', userSchema);
