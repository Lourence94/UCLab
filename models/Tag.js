var keystone = require('keystone');
var Types = keystone.Field.Types;

var Tag = new keystone.List('Tag', {
	map: { name: 'value' },
	autokey: { from: 'value', path: 'key', unique: true },
});

Tag.add({
	value: { type: String, required: true, index: true, initial: true },
	valueRussian: { type: String, initial: true },
});

Tag.relationship({ ref: 'Post', path: 'posts', refPath: 'tags' });

Tag.defaultColumns = 'value, valueRussian'

Tag.register();
