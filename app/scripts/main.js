Parse.initialize("b8rIFZlIjZdZxrSnCEV3wvKEHHDdY6B3IHYXzFEj", "Lp6gEnYHcW798yEr2MFlqYCz5y5b0t5BFcPg4LmD");

var User = Parse.Object.extend('User');
var idea = Parse.Object.extend('idea');

var UserCollection = Parse.Collection.extend({
	model: 'User'
});

var IdeaCollection = Parse.Collection.extend({
	model: 'idea'
});

$('.title').click(function(){
	router.navigate('home', {trigger: true})
})