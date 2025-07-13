const express = require('express');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const usermodel = require("./models/user");

const app = express();
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('ind');
});

app.post('/create', (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await usermodel.create({
        username,
        email,
        password: hash,
        age
      });

      res.send(createdUser);
    });
  });
});

app.listen(3001);
