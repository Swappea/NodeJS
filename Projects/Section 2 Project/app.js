
/* //Custom Module 
var logger = require('./logger');
logger.log('Hello from app.js!!!');
*/

/* //Path Module
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
*/

/* //OS Module
const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();
console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);
*/

/* //File System Module
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err, files) {
    if (err) console.log('Error:', err);
    else console.log(files);
});
*/

/* // Events Module 
const EventEmmitter = require('events'); // EventEmmitter is a class

const Logger = require('./logger');
const logger = new Logger();

// registered a listener
logger.on('messageLogged', (arg) => { // eventArg, e or any name for argument is preferred
    console.log('Listener Called', arg);
});

logger.log('Message from app.js');
*/

/* // HTTP Module 

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000');
*/
