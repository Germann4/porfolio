const express = require("express");
const routerMusicExpress = express.Router();

routerMusicExpress.get('/', (req, res) => {
    res.send('Music!')
});
routerMusicExpress.get('/rock', (req, res) => {
    res.send('Music Rock!')
});

module.exports.routerMusicExpress = routerMusicExpress;