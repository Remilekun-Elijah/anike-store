var express = require('express');
var router = express.Router();

router.get('/new', (req, res) => {
    // res.send('hello');
    res.render("signin", {});
})

module.exports = router;