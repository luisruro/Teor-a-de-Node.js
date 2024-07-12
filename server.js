const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});
//En el segundo parametro "Esto es un mensaje de prueba" debe ser eliminado ahi debe de ir una ip o el hombre del host
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});