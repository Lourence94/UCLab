/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var i18n = require('i18n');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', i18n.init);
keystone.pre('routes', middleware.initErrorHandler);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Error handler
keystone.set('404', function (req, res, next) {
	res.notFound();
});

keystone.set('500', function (err, req, res, next) {
	var title, message;
	if (err instanceof Error) {
		message = err.message;
		err = err.stack;
	}
	res.err(err, title, message);
});



// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', middleware.requireUser, routes.views.gallery);
	app.get('/terms', routes.views.terms);
	app.get('/person/:person', routes.views.person);
	app.get('/login', middleware.requireUser, routes.views.login);
	app.get('/map', middleware.requireUser, routes.views.map);
	app.get('/about', routes.views.about);
	app.get('/product', routes.views.product);
	app.get('/signup', middleware.requireUser, routes.views.signup);
	app.get('/service/:name', routes.views.service);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
	// Language switch
	app.get('/ru', function (req, res) {
		res.cookie('locale', 'ru', { maxAge: 900000, httpOnly: true });
		res.redirect('back');
	});
	app.get('/en', function (req, res) {
		res.cookie('locale', 'en', { maxAge: 900000, httpOnly: true });
		res.redirect('back');
	});
	
	// API
	app.all('/api/service', routes.api.service);
	app.get('/api/test', keystone.middleware.cors, routes.api.test);
	//app.get('/api/test/service', keystone.middleware.cors, routes.api.test);
};
