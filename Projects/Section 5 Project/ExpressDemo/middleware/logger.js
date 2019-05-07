function log(req, res, next) {
    console.log('Logging...');
    next(); // to pass control to next middle ware fn... if we dont do this req will end up hanging
};

module.exports = log;