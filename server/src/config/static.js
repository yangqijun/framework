
var Static = function (app, express) {
    this.app = app;
    app.use(express.static('client')) //client dose not have to be the part of url
    // app.use('/client', express.static('client')) //client has to be the part of url
    // app.use('/client', express.static(path.join(__dirname, 'client')))
};

module.exports = Static;