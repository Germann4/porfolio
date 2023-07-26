const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('views'));

let conect = mysql.createConnection({
    host : 'localhost',
    database : 'data',
    user: 'root'
});
app.get('/', (req, res) => {
    res.render('PaginaWeb');
})
app.get('/game', (req, res) => {
    res.render('game_with_javascript');
})
app.get('/signup', (req, res) => {
    res.render('signup');
})
app.get('/cripto', (req, res) => {
    res.render('cripto');
})
app.get('/signin', (req, res) => {
    res.render('signin');
})
app.post('/signup', (req, res) => {
    let {name, username, password} = req.body
    conect.query(`INSERT INTO user(name, email, password) VALUES('${name}','${username}','${password}')`,(err, result) => {
       if(err) throw err;
    })
    res.render('profile',{name:name});
})
app.post('/profile', (req, res) => {
    let {username, password} = req.body

    conect.query(`SELECT * FROM user WHERE email = '${username}' AND password = '${password}'`, (err, result) => {
        if(result.length === 0) {
            res.redirect('/signin')
        } else {
            res.render('profile',{name: result})
            console.log(result)
        }
   })
})
let port = process.env.PORT || 3000;

app.listen(port);