const https = require(https);

const port = process.env.PORT || 5000;

https.createServer(function (req, res) {
  let url = req.url;

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Hello world!</h1>');
  res.end();
}).listen(port, function() {
  console.log("server start at port.")
});
