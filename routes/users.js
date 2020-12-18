const router = require('express').Router();
const { getUsers, getUser, createUser, updateProfile, updateAvatar } = require('../controllers/users.js');

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.patch('/user/me', updateProfile);
router.patch('/user/me/avatar', updateAvatar);


module.exports = router;
