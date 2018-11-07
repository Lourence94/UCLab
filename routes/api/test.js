const keystone = require('keystone')
const Service = keystone.list('Service')

module.exports = (req, res) => {
	let q = Service.model.find();
	q.exec((err, result) => {
		res.json(result);
	});
}
