/*global define*/
'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var JST = require('<%= fileName %>');

var <%= _.classify(name) %>View = Backbone.View.extend({

    template: JST['<%= jst_path %>'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
    }

});
module.exports = <%= _.classify(name) %>View;
