const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

	let hash = req.query.hash;

	if(hash){

		let file = await ipfs.get(hash);

		if(file) {
			//file[0].content = file[0].content.toString('base64');
			let ret = retcode.getSuccess();
			ret['data'] = file[0].content.toString('base64');
			res.send(ret);
			return;
		}
	}

	res.send(retcode.getFail());
});


router.post('/', async function(req, res, next) {

	let id = req.body.id;
	let fileName = req.body.fileName;
	let data = req.body.data;

	if(id && fileName && data) {

		let buffer = new Buffer(data, 'base64');

		let result = await ipfs.add(fileName,buffer);

		if(result[0]) {

			let ret = retcode.getSuccess();
			ret['data'] = {
				'id' : id,
				'fileName' : fileName,
				'hash' : result[0].hash,
				'size' : result[0].size
			};

			res.send(ret);
			return;
		}
	}

	res.send(retcode.getFail());
});

module.exports = router;
