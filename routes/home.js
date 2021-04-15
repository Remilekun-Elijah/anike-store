var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('home', { title: 'Your number 1 plug' });
});

module.exports = router;