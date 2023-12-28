const express = require('express');
const router = express.Router();

var { tempAdmin, addAdmin, addAdminData, Dashboard, Users, DeleteUsers, Messages, DeleteMessages, Profile, editProfile } = require('../CONTROLLER/AdminControl');

router.get('/', tempAdmin);
// router.get('/', Dashboard);
router.post('/register', addAdmin);
router.post('/addAdminData', addAdminData);
router.get('/users', Users);
router.post('/delete-user', DeleteUsers);
router.get('/messages', Messages);
router.post('/delete-messages', DeleteMessages);
router.get('/profile', Profile);
router.post('/edit-profile', editProfile);

module.exports = router;