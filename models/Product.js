const keystone = require('keystone');
const Types = keystone.Field.Types;

const Product = new keystone.List('Product', {
	map: { name: 'title' }
});

const storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/images/background'),
		publicPath: '/images/background/',
	},
	schema: {
		url: true,
	},
});

Product.add({
	title: {type: String, required: true, initial: true},
	titleRussian: {type: String},
	categories: { type: Types.Relationship, ref: 'ProductCategory', many: true },
	image: { type: Types.File, storage: storage },
	developer: { type: Types.Relationship, ref: 'Author', many: true },
	links: {
		download: {type: Types.Url},
		service: {type: Types.Relationship, ref: 'Service'}
	},
}, 'Page content', {
	blocks: { type: Types.Relationship, ref:'ProductBlock', many: true, filters: { product: ':_id' }}
});

Product.register();
