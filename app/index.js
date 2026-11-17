// Triggering a fresh run
const http = require("http");

function add(a, b) {
  return a + b;
}
//
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Docker!\n");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = { add };