const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);


//function here gives access to response from server
server.on('response', (resp) => {
  console.log('here1');
  process.stdout.write('\u001B[2J\u001B[0;0f');
  process.stdout.write(resp);
  process.stdout.write('\n\> ');
});

let command, args;
rl.on('line', (input) => {
  console.log('here2');
  [command, ...args] = input.split(' ');
  client.emit('command', command, args);
});
