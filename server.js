const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './inicio.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Página não encontrada');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      if (filePath === './FicheirosHTMLWEB/inicio.html') {
        data = data.toString()
          .replace('<a href="ficheiro2.html">Abrir Página 2</a>', '<a href="/ficheiro2.html">Abrir Página 2</a>')

      }
      res.end(data);
    }
  });
});

server.listen(8000, () => {
  console.log('Servidor em execução na porta 8000');
  
});