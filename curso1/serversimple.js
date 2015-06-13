var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'application/json'});
  var datos = {
                  "nombre" : "Elian",
                  "Apellido" : "Chancay",
                  "Edad"  : "4 meses"
              };
  res.write(JSON.stringify(datos));
  res.end();
}).listen(3000);


console.log("Escuchando en http://localhost:3000");
