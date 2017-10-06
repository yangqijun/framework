var AuthFilter = require("../filter/AuthFilter");
module.exports = {
    "/*": new AuthFilter().filter,
    "/data/*": function(req, res, next) {
        console.log('Intercepting data requests ...');
        res.redirect('/');
    }
}