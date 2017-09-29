var ApiFilter = require('.');

module.exports = {
    "/api/*": function(req, res, next) {
        console.log('Intercepting requests ...');
        res.redirect('/');
    }
}