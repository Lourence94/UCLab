var keystone = require('keystone');
var Types = keystone.Field.Types;

var Author = new keystone.List('Author');

Author.add({
	name: { type: Types.Name, required: true, index: true, initial: true },
	russianName: { type: Types.Name, index: true, initial: true },
	person: { type: Types.Relationship, ref: 'Person', initial: true },
});

Author.relationship({ ref: 'Post', path: 'posts', refPath: 'authors' });

Author.register();
