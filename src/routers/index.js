const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.info('welcome API-studies');
    res.send('welcome API-studies')
});

module.exports = router;