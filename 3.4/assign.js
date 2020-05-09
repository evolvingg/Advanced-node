const readline = require('readline');

const ar = [1,2,3,4,5];
const myFunc = (val) => {
    setTimeout(()=> {
        console.log(val);
    },500)
}

const rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', (input) => {
  if(input) {
    myFunc(input);
    ar.map(item => myFunc(item));
  }
  else {
    process.exit(1);
  }
});


// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello World\n');
// });

// server.listen(8080, () => {
//   console.log('Server is running...');
// });