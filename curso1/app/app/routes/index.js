var express = require('express'),
    route   = express.Router();


route.get('/' , function(req,res){
    res.render('index',{ nombre : req.query.nombre });
});


route.post('/' , function(req,res){
   res.send(req.body.nombre);
});

route.put('/' ,function(req,res){
   res.send(req.body.nombre);
});

route.delete('/' ,function(req,res){
   res.send(req.body.nombre);
});

module.exports = route;
