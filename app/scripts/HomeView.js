var HomeView = Parse.View.extend({
	
	template: _.template($('.home-view').text()),

	initialize: function() {
		$('.views-container').append(this.el);
		this.render();
		console.log(this.model);
	},

	render: function() {
		var renderTemplate = this.template(this.model.attributes)
		this.$el.html(renderTemplate);
		return this;

	},
});