const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

https
  .createServer(options, function (req, res) {
    res.writeHead(200, {
      "content-type": "text/html",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000,
    });
    fs.createReadStream("../client/aframe/index.html").pipe(res);
  })
  .listen(8000);
