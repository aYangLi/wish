const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.listen(3000);

app.set('views',path.join(__dirname,'./views'))
app.set('view engine','xtpl');

app.use(express.static(path.join(__dirname,'./public')));

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req, res) => {
  res.render('index',{});
});