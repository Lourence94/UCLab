const keystone = require('keystone');
const Service = keystone.list('Service');
const request = require('request');

module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	locals.section = 'service';
	locals.data = {
		methods: {}
	};
	
	view.on('init', next => {
		let q = Service.model.findOne({ key: req.params.name }, { submitUrl: false, _id: false, __v: false });
		q.exec(function (err, result) {
			request({
				method: 'POST',
				url: result.methodsUrl,
				body: JSON.stringify(req.body),
			}, function (err, responce, body) {
				locals.data.methods = JSON.parse(body);
				next();
			});
		});
	});

	view.render('service');
	
	
};

