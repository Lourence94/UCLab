const keystone = require('keystone');
const Types = keystone.Field.Types;

const MapLayer = new keystone.List('MapLayer', {
	map: { name: 'title' }
});

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

MapLayer.add({
	title: { type: String },
	subtitle: { type: String },
	image: { type: Types.File, storage: storage }
});

MapLayer.register();
