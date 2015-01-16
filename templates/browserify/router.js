/*global define*/

var $ = require('jquery');
var Backbone = require('backbone');

var <%= _.classify(name) %>Router = Backbone.Router.extend({
    routes: {
    }

});

module.exports = <%= _.classify(name) %>Router;
