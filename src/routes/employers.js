const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const employers = require('../sample.json');

//Get games
router.get('/', (req, res) => {
    res.json(employers);
});

module.exports = router;