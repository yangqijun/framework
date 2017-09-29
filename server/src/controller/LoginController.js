var BaseController = require('./BaseController')
class BookController extends BaseController {
    constructor() {
        super();
    }
    login(req, res) {
        var params = req.params;
        var user = params.user;
        var pass = params.pass;
        if ("zs" === user && "1234" === pass) {
            res.send("login success " + req.sessionID);
        } else {
            res.send("login failed");
        }
    }
    logout(req, res) {
        res.send("logout");
    }
}
module.exports = BookController;