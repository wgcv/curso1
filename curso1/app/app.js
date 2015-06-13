var express     = require('express'),
    consolidate = require('consolidate'),
    swig        = require('swig'),
    path    	  = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser');


var index = require('./app/routes/index'),
    error = require('./app/routes/errors');

var app = express();

app.set('view engine','html');
app.set('views', './app/views');
app.engine('html',consolidate.swig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join('./public/')));

app.use(index);
app.use(error);

var server = app.listen(3000);
