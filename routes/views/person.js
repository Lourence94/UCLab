var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'person';
	locals.data = {
		person: {},
	};
	
	view.on('init', function (next) {
		var q = keystone.list('Person')
			.model
			.findOne(
				{ slug: req.params.person },
				{ _id: false, __v: false, slug: false });

		q.exec(function (err, result) {
			locals.data.person = result;
			console.log(result);
			next(err);
		});
	});

	view.render('person', {
		layout: 'defaultWhite.hbs',
	});

};
