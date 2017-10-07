var BaseController = require('./BaseController')

class HomeController extends BaseController {
    constructor() {
        super();
    }
    home(req, res) {
        res.send("Home");
    }
    loginPage(req, res) {
        res.send("login page");
    }
}
module.exports = HomeController;