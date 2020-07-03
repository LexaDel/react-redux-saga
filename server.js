const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

const STATIC_RESOURCES = 'public';

const routes = require('./routes/api');

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, STATIC_RESOURCES)));

app.use('/api', routes);

app.get('/*', (req, res) => {
    res.sendFile(
        path.join(__dirname, STATIC_RESOURCES, 'index.html'),
        (err) => {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

function start() {
    try {
        app.listen(PORT, () => {
            console.log('Server has been started');
        });
    } catch (err) {
        console.log(err);
    }
}

start();