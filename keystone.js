// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');
const i18n = require('i18n');
const mongo = require('connect-mongo');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'UCLab',
	'brand': 'UCLab',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',
	
	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'language options': {
		'disable': true
	// 	'supported languages': ['en', 'ru'],
	// 	'language cookie': 'language',
	// 	'language cookie options': {},
	// 	'language query name': 'lang'
	},
	'mongo': process.env.MONGO_URI || "mongodb://admin:door-horse-ring-zero@localhost/uclab?authSource=admin",
	'session store': 'mongo',
	'cors allow origin': true,
	// Use this port on cluster server instead of default 3000
	'port': '31101',
	// Wysiwyg config
	'wysiwyg images': true,
	'wysiwyg menubar': true,
	'wysiwyg additional plugins': 'table, advlist, anchor, colorpicker, charmap, hr, media, paste, preview, searchreplace, textcolor',
	'wysiwyg additional buttons': 'forecolor backcolor, media preview,',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.s
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

i18n.configure({
	locales: ['en', 'ru'],
	directory: __dirname + '/locales',
	cookie: 'locale',
	register: keystone,
	autoReload: true,
	updateFiles: true,
	syncFiles: true,
	api: {
		'__': 't',
		'__n': 'tn'
	},
});
// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	page: ['MainPage', 'MapLayer'],
	posts: ['posts', 'post-categories', 'tags'],
	images: 'images',
	enquiries: 'enquiries',
	users: 'users',
	services: 'services',
	people: ['people', 'authors', 'vacancies'],
	products: ['products', 'product-blocks', 'product-categories']
});

// Start Keystone to connect to your database and initialise the web server


if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
	+ '\n----------------------------------------'
	+ '\nYou have opted into email sending but have not provided'
	+ '\nmailgun credentials. Attempts to send will fail.'
	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
	+ '\nset up your mailgun integration');
}


keystone.start();
