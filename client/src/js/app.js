const $ = require("jquery");
const Backbone = require("backbone");
require("../style/sass/common.scss");

const APP = Backbone.View.extend({
    render() {
        this.$el.html("<div class='box'></div>");
        return this;
    },
    applyTo(target) {
        $(target).append(this.$el);
    }
});
module.exports = APP;
$(() => {
    new APP().render().applyTo("body");
});