var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	locals.section = 'signup';
	locals.validationErrors = {};
	
	view.on('post', { action: 'register' }, function (next) {
		
		var newUser = new User.model();
		var updater = newUser.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, password',
			errorMessage: 'You should input correct data:',
		}, function (err) {
			if (err) {
				console.log('hi');
				locals.validationErrors = err.errors;
			}
			next();
		});
	});
	
	view.render('signup');
	console.log(req.body);
};
