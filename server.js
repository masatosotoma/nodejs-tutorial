const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");

// create webserver

const server = http.createServer((req, res) => {
  //access coming from browser
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
});

server.listen(PORT, () => {
  console.log("server running!");
});
