var keystone = require('keystone');
var Types = keystone.Field.Types;

var Image = new keystone.List('Image', {
	map: { name: 'url' },
});
var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/images'),
		publicPath: '/uploads/images/',
	},
	schema: {
		url: true,
	},
});

Image.add({
	url: { type: String, noedit: true },
	source: { type: Types.File, storage: storage, required: true, initial: true },
	linkToPost: { type: Types.Relationship, ref: 'Post', many: true, initial: true },
	preview: { type: Types.Html, wysiwyg: true, height: 415 },
});

Image.schema.post('save', function () {
	Image.model.findByIdAndUpdate(this._id, { preview: '<img src="' + this.source.url + '" width="649"/>', url: this.source.url }).exec();
});

Image.defaultColumns = 'url';

Image.register();
