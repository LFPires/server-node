var http = require("http");
var fs = require("fs");
var events = require('events');

//create event object
var eventEmitter = new events.EventEmitter();

//create event handler
var connectHandler = function connected()
{
  console.log('connection succesful');

  eventEmitter.emit('data_received');
}

//bind event with handler
eventEmitter.on('connection', connectHandler);

//bind data_received event with anonymous function
eventEmitter.on('data_received', function()
{
  console.log('data received succesfully');
});

//fire connection event
eventEmitter.emit('connection');

fs.readFile('input.txt' , function(err, data)
{
  if(err)
    return console.error(err);
  console.log(data.toString() + "1");
});
var data = fs.readFileSync("input.txt");
console.log(data.toString() + "2");

http.createServer(function(request, response)
{
  response.writeHead(200, {'Content-Type':'text/plain'});

  response.end('Helloo World\n');
}).listen(8081);

console.log('server running');
