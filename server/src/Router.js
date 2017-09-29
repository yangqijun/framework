var routerConfig = require('./config/routerConfig');
var BookController = require('./controller/BookController')
var METHOD = require('./constants/Method')
var _ = require("lodash");
var Router = function (app) {
    this.app = app;
    this.applyRouter();
};
Router.prototype = {
    applyRouter() {
        var app = this.app;
        _.each(this._processConfig(routerConfig), function (router, path) {
            _.each(router, function(handler, method) {
                switch (method) {
                    case METHOD.GET:
                        app.get(path, handler);
                        break;
                    case METHOD.PUT:
                        app.put(path, handler);
                        break;
                    case METHOD.POST:
                        app.post(path, handler);    
                        break;
                    case METHOD.DELETE:
                        app.delete(path, handler); 
                        break;
                    default:
                        app.get(path, handler);
                }
            });
        });
    },

    _processConfig(routerConfig) {
        var finalRouter = {};
        var configs = [routerConfig];
        while(configs.length) {
            config = configs.shift();
            _.each(config, function(routers, path) {
                finalRouter[path] = {};
                _.each(routers, function(value, key) {
                    if (_.startsWith(key, "/")) {
                        var newRouter = {};
                        newRouter[path + key] = value;
                        configs.push(newRouter);
                    } else {
                        finalRouter[path][key] = value;
                    }
                });
            });
        }
        console.log(finalRouter);
        return finalRouter;
    }
};
module.exports = Router;