var keystone = require('keystone');
var User = keystone.list('User');

module.exports.register = function (req, res) {
	var newUser = new User.model();
};
