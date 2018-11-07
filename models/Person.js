var keystone = require('keystone');
var Types = keystone.Field.Types;

var Person = new keystone.List('Person', {
	autokey: {
		path: 'slug',
		from: 'name',
		unique: true,
	},
});

Person.add({
	name: {
		type: Types.Name,
		required: true,
		index: true,
		initial: true,
	},
}, 'Details', {
	photo: {
		type: Types.CloudinaryImage,
		initial: true,
	},
	team: {
		type: Types.Select,
		options: 'Developers, Consultants',
		initial: true,
		index: true,
	},
	position: {
		type: String,
		initial: true,
	},
	about: {
		type: Types.Html,
		wysiwyg: true,
		height: 400,
	},
});

Person.defaultColumns = 'name, position, team';
Person.defaultSort = 'team';

Person.register();
