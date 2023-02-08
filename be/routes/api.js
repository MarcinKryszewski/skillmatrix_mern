const express = require('express');
const router = express.Router();
const testActions = require('../actions/tests');

//all users
router.post('/test', testActions.MakeTest);

module.exports = router;