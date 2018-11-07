const keystone = require('keystone');
const Types = keystone.Field.Types;

const storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/images/map_layers'),
		publicPath: '/images/map_layers/',
	},
	schema: {
		url: true,
	},
});

const ProductBlock = new keystone.List('ProductBlock');

ProductBlock.add({
	image: { type: Types.File, storage: storage }, /* TODO: make images as list */
	content: { type: Types.Html, wysiwyg: true },
	product: { type: Types.Relationship, ref: 'Product'}
});

ProductBlock.register();
