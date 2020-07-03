const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/data', async (req, res) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
    res.json(data);
});

module.exports = router;