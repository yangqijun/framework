var BookController = require('../controller/BookController');
var UserController = require('../controller/UserController');
var bookController = new BookController();
module.exports = {
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