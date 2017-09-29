var BaseController = require('./BaseController')
class BookController extends BaseController {
    constructor() {
        super();
    }
    get(req, res) {
        res.send("get book " + req.params.id);
    }
    post(req, res) {
        res.send("post book");
    }
    filterByName(req, res) {
        res.send("filter by name " + req.params.name);
    }
    filterByNameAndAuthor(req, res) {
        res.send("filter by name and author " + req.params.name + " " + req.params.author);
    }
    list(req, res) {
        res.send("list books");
    }
}
module.exports = BookController;