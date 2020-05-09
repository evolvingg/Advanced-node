const http = require('http');

// req: http.ClientRequest
const req = http.request(
  {hostname:'www.google.com'},
  (res) => {
    // res: http.IncomingMessage
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', (data) => {
      console.log(data.toString());
    });
  }
);

req.on('error', (e) => console.log(e));

req.end();
//console.log(req.agent); // http.Agent


//other way using get()
//in httpGet file