var Router = Parse.Router.extend({
	
	routes: {
		''      : 'home',
		'home'  : 'home',
		'join'  : 'join',
		'login' : 'login',
	},

	initialize: function(options) {
		this.currentView = null;
	},

	home: function() {
		$('.views-container').empty();
		var view = new HomeView({
			model: Parse.User.current().attributes
		});
		this.swap(view);
	},

	join: function() {
		$('.views-container').empty();
		var view = new JoinView();
		this.swap(view);
	},

	login: function() {
		$('.views-container').empty();
		var view = new LoginView();
		this.swap(view);
	},

	swap: function(view) {
		if (this.currentView) this.currentView.remove();
		this.currentView = view;
		this.currentView.render();
	},
});

var router = new Router();
Parse.history.start();