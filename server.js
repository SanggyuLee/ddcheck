const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

const db = mongoose.connection;
const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
 
let server = app.listen(port, function(){
	    console.log("Express server has started on port " + port);
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.on('error', console.error);
db.once('open', () => {
	console.log("Connected to mongodb server");
});

mongoose.connect('mongodb://localhost/dongdo');

const Dept = require('./models/dept');
const router = require('./router/main')(app, Dept);
