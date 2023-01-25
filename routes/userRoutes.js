const express = require('express');
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe
} = require('./../controllers/userController');
const {
  signup,
  login,
  forgetPassword,
  resetPassword,
  updatePassword,
  protect
} = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgetPassword', forgetPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/updateMyPassword', protect, updatePassword);
router.get('/me', protect, getMe, getUser);
router.patch('/updateMe', protect, updateMe);
router.delete('/deleteMe', protect, deleteMe);

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);
router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
