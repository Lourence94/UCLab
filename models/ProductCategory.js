var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var ProductCategory = new keystone.List('ProductCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ProductCategory.add({
	name: { type: String, required: true },
	nameRussian: { type: String },
});

ProductCategory.relationship({ ref: 'Product', path: 'products', refPath: 'products' });

ProductCategory.register();
