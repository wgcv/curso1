var express = require('express'),
    router   = express.Router();


router.use(function(req,res){
  res.status(404);
  if(req.accepts('html')){
    res.render(404);
  }
});

router.use(function(req,res){
  res.status(500);
  if(req.accepts('html')){
    res.render(500, {
      message : 'Server Die x.x'
    });
  }
});


module.exports = router;
