var filterConfig = require('./config/filter');
var _ = require("lodash");
var Filter = function (app) {
    this.app = app;
    this.applyFilter();
};
Filter.prototype = {
    applyFilter() {
        var app = this.app;
        _.each(filterConfig, function (filter, path) {
            app.all(path, filter);
        });
    }
};
module.exports = Filter;