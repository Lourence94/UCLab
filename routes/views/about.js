var keystone = require('keystone');
var _ = require('lodash');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'about';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	locals.data = {
		people: {},
	};
	
	view.on('init', function (next) {
		var q = keystone.list('Person')
			.model
			.find({}, { _id: false, __v: false, about: false });
		
		q.exec(function (err, result) {
			locals.data.people = _.groupBy(result, 'team');
			next(err);
		});
	});
	// On POST requests, add the Enquiry item to the database
	// view.on('post', { action: 'contact' }, function (next) {
    //
	// 	var newEnquiry = new Enquiry.model();
	// 	var updater = newEnquiry.getUpdateHandler(req);
    //
	// 	updater.process(req.body, {
	// 		flashErrors: true,
	// 		fields: 'name, email, phone, enquiryType, message',
	// 		errorMessage: 'There was a problem submitting your enquiry:',
	// 	}, function (err) {
	// 		if (err) {
	// 			locals.validationErrors = err.errors;
	// 		} else {
	// 			locals.enquirySubmitted = true;
	// 		}
	// 		next();
	// 	});
	// });

	view.render('about');
};
