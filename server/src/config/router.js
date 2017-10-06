var BookController = require('../controller/BookController');
var HomeController = require('../controller/HomeController');
var UserController = require('../controller/UserController');
var LoginController = require('../controller/LoginController');
var bookController = new BookController();
module.exports = {
    "/": {
        "get": new HomeController().home
    },
    "/index.html": {
        "get": new HomeController().home
    },
    "/data": {
        "/book": {
            "/:id": {
                "get": bookController.get,
            },
            "/:name/:author": {
                "get": bookController.filterByNameAndAuthor,
            },
            "get": bookController.list,
            "post": bookController.post
        },
        "/user": {
            "/:id": {
                "get": new UserController().getUserById
            }
        },
        "/login/:user/:pass": {
            "get": new LoginController().login
        },
        "/logout": {
            "get": new LoginController().logout
        }
    }
}