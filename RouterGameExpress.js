const express = require("express");
const routerGameExpress = express.Router();

routerGameExpress.get('/', (req, res) => {
    res.send('Game!')
});
routerGameExpress.get('/pacman', (req, res) => {
    res.send('Pacman!')
});
routerGameExpress.get('/zelda', (req, res) => {
    res.send('Zelda!')
});
module.exports.routerGameExpress = routerGameExpress;
