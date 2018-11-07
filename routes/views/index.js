var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {};

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	view.on('init', (next) => {
	 	keystone.list('MainPage').model.find().populate('mapSection.layers').exec((err, result)=>{
	 		if (err || !result.length) {
	 			return next(err);
	 		}
	 		locals.data = result[0];
	 		next();
		});
	});
	
	view.on('init', (next) => {
		keystone.list('Post').model.find({ 'banner': { $in : [ 'Main page', 'Everywhere' ]}}).exec((err, result) => {
			if(err || !result.length) {
				return next(err);
			}
			locals.data.posts = result;
			next();
		});
	});
	
	// Render the view
	view.render('index');
};
