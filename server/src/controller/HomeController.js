var BaseController = require('./BaseController')

class HomeController extends BaseController {
    constructor() {
        super();
    }
    home(req, res) {
        res.send("Home");
    }
}
module.exports = HomeController;