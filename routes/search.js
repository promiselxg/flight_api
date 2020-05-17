const express = require('express');
const {
    search
} = require('../controllers/search')

const router = express.Router();

router.post('/search', search)

module.exports = router;