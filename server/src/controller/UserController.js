var BaseController = require('./BaseController')
var UserModel = require('../model/UserModel');

class UserController extends BaseController {
    constructor() {
        super();
    }
    getUserById(req, res) {
        res.send("get user by id:" + req.params.id);
    }
}
module.exports = UserController;