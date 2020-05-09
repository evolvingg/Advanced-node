const http = require('http');

const req = http.get(
    'http://www.google.com',
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
  
