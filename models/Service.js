var keystone = require('keystone');
var Types = keystone.Field.Types;

/* Service model */

var Service = new keystone.List('Service', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'key', unique: true },
});

Service.add({
	title: { type: String, required: true, initial: true },
	methodsUrl: { type: Types.Url, initial: true, required: true },
	submitUrl: { type: Types.Url, initial: true, required: true },
});

Service.defaultColumns = 'title, methodsUrl, submitUrl';
Service.register();
