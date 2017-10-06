class AuthFilter {
    constructor() {

    }

    filter(req, res, next) {
        const certificate = req.cookies ? req.cookies.certificate : "";
        if (certificate === "123") {
            next();
        } else {
            res.redirect("/");
        }
    }
}

module.exports = AuthFilter;