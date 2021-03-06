const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:userId/friends
router.route('/:userId/friends/:friendId').post(addFriend);

module.exports = router;
