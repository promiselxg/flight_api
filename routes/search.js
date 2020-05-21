const express = require('express');
const {
    search
} = require('../controllers/search')

const router = express.Router();

router.post('/search', search)
router.get('/flights/search', (rq, res) => {
    res.render('index')
})
module.exports = router;