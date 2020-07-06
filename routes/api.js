const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

let todos;

router.get('/data', async (req, res) => {
    todos = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json());
    console.log('data');
    res.json(todos);
});

router.get('/getData', async (req, res) => {
    res.json(todos);
});

router.delete('/delete/:todoId', async (req, res) => {
    try {
        const { todoId } = req.params;
        todos = todos.filter(todo => todo.id != todoId);
        res.json({STATE: "SUCCESS"});
    } catch (err) {
        res.json({STATE: "FAILED"});
    }
});

module.exports = router;