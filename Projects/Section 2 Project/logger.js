const EventEmmitter = require('events'); // EventEmmitter is a class

var url = 'http://mylogger.io/log';

class Logger extends EventEmmitter {

    // this variable and fn are scoped to this module
    log(message) {
        // send an http message
        console.log(message);
        // raise a event
        this.emit('messageLogged', { id: 1, url: 'http://'});
    }

}


module.exports = Logger;