var express = require('express'),
    swig    = require('swig'),
    consolidate = require('consolidate'),
    path      = require('path'),
    bodyParser = require('body-parser');


var app = express();

// motor de plantillas
app.set('view engine','html');
app.set('views', './views');
app.engine('html',consolidate.swig);

// archivos estaticos .css .js
app.use(express.static(path.join('./public')));

//habilito el paso de variables

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));




var server = app.listen(3000);

console.log('escuchando en el puerto 3000');
