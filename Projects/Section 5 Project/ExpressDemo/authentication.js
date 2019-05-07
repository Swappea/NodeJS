function authenticate (req, res, next) {
    console.log('Authenticating...');
    next(); // to pass control to next middle ware fn... if we dont do this req will end up hanging
};

module.exports = authenticate;