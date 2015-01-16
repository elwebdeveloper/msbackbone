/*global define*/

var _ = require('underscore');
var Backbone = require('backbone');
var <%= _.classify(name) %>Model = require('models/<%= name %>');

var <%= _.classify(name) %>Collection = Backbone.Collection.extend({
	model: <%= _.classify(name) %>Model
});
module.exports = <%= _.classify(name) %>Collection;