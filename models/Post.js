var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var imageStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/images'),
		publicPath: '/uploads/images/',
	},
	schema: {
		url: true,
	},
});

var fileStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/files'),
		publicPath: '/uploads/files/',
		generateFilename: require('keystone-storage-namefunctions').originalFilename
	},
	schema: {
		url: true,
	},
});


var Post = new keystone.List('Post', {
	map: {name: 'title'},
	autokey: {path: 'slug', from: 'title', unique: true},
});

Post.add({
	title: { type: String, required: true, initial: true, index: true},
	titleRussian: { type: String },
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true, initial: true },
	publishedDate: {type: Types.Date, index: true, dependsOn: { state: 'published' }},
	authors: {type: Types.Relationship, ref: 'Author', index: true, many: true },
	citation: {type: Types.Text},
	tags: {type: Types.Relationship, ref: 'Tag', many: true },
	metaName: {type: Types.Text, max: 60, note: '60 symbols'},
	metaContent: {type: Types.Textarea, max: 160, height: 100, note: '160 symbols'},
}, 'Files', {
	bannerImage: {type: Types.File, storage: imageStorage},
	image: {type: Types.File, storage: imageStorage},
	document: {type: Types.File, storage: fileStorage},
}, 'Content', {
	content: {
		brief: {type: Types.Html, wysiwyg: true, height: 150},
		russianBrief: {type: Types.Html, wysiwyg: true, height: 150},
		extended: {type: Types.Html, wysiwyg: true, height: 400},
	},
}, {
	banner: {type: Types.Select, options: 'Everywhere, Main page, In header, None', default: 'None', index: true},
	state: {type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true},
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.schema.methods.getTitle = function () {
	return this.title;
};

Post.relationship({ref: 'Image', path: 'images', refPath: 'linkToPost'});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
