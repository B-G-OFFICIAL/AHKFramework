const express = require('express');
const router = express.Router();

var { Home, About, Contact, AddContact, CreateFile, AddScript, Login, Authentication, Logout } = require('../CONTROLLER/PublicControl');

router.get('/', Home);
router.get('/about', About);
router.get('/contact', Contact);
router.post('/addcontact', AddContact);
router.get('/createfile', CreateFile);
router.post('/AddScript', AddScript);
router.get('/login', Login);
router.post('/login', Authentication);
router.get('/logout', Logout);

module.exports = router;