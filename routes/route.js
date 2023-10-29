const router = require('express').Router();

const { sendEmail } = require('../controller/appController.js')


/** HTTP Reqeust */
router.post('/sendEmail', sendEmail);


module.exports = router;