const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end('¡Hola mundo desde Node.js sin Express!');
});

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
