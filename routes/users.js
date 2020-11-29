const router = require('express').Router();
const { getUsers, getUserProfile } = require('../controllers/users.js');

router.get('/users', getUsers);

router.get('/users/:id', getUserProfile);

module.exports = router;
