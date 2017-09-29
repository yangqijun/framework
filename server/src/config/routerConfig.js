var BookController = require('../controller/BookController');
var HomeController = require('../controller/HomeController');
var UserController = require('../controller/UserController');
var bookController = new BookController();
module.exports = {
    "/": {
        "get": new HomeController().home
    },
    "/index.html": {
        "get": new HomeController().home
    },
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
    }
}