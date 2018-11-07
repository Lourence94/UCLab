var keystone = require('keystone');
var Types = keystone.Field.Types;

// Vacancy model

var Vacancy = new keystone.List('Vacancy', {
	map: { name: 'title' },
});

Vacancy.add({
	title: { type: String },
});

Vacancy.register();
