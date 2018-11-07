const keystone = require('keystone');
const Types = keystone.Field.Types;

const MainPage = new keystone.List('MainPage', {
	singular: 'Main Page'
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

MainPage.add({
	topSection: {
		image: { type: Types.File, storage: storage },
		title: { type: String },
		subtitle: { type: String }
	},
	mapSection: {
		layers: { type: Types.Relationship, ref: 'MapLayer', many: true }
	}
});

MainPage.register();
