var AuthFilter = require("../filter/AuthFilter");
module.exports = {
    "/data/*": new AuthFilter().filter
}