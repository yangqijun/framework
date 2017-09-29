var BookController = require('../controller/BookController');
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
    }
}