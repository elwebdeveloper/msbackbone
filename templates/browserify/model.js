/*global define*/

var _ = require('underscore');
var Backbone = require('backbone');

var <%= _.classify(name) %>Model = Backbone.Model.extend({
    url: '',

    initialize: function () {
    },

    defaults: {
    },

    validate: function (attrs, options) {
    },

    parse: function (response, options)  {
        return response;
    }
});
module.exports = <%= _.classify(name) %>Model;
