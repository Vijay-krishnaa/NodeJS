const http = require("http");
const requesthandler = require("./calc");
const server = http.createServer(requesthandler);
server.listen(3000, () => {
  console.log(`server is running at http://localhost:3000`);
});
