const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) {
    console.log('1');
    super();
    this.tasks = {};
    this.taskId = 1;
    process.nextTick(() => {
      console.log('2');
      this.emit(
        'response',
        'Type a command (help to list commands)'
      );
    });
    client.on('command', (command, args) => {
      console.log('3');
      switch (command) {
      case 'help':
      case 'add':
      case 'ls':
      case 'delete':
        this[command](args);
        break;
      default:
        this.emit('response', 'Unknown command...');
      }
    });
  }

  tasksString() {
    console.log('4');
    return Object.keys(this.tasks).map(key => {
      return `${key}: ${this.tasks[key]}`;
    }).join('\n');
  }

  help() {
    console.log('5');
    this.emit('response', `Available Commands:
  add task
  ls
  delete :id`
    );
  }
  add(args) {
    console.log('5');
    this.tasks[this.taskId] = args.join(' ');
    this.emit('response', `Added task ${this.taskId}`);
    this.taskId++;
  }
  ls() {
    console.log('5');
    this.emit('response', `Tasks:\n${this.tasksString()}`);
  }
  delete(args) {
    console.log('5');
    delete(this.tasks[args[0]]);
    this.emit('response', `Deleted task ${args[0]}`);
  }
}

module.exports = (client) => new Server(client);
