const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

	let hash = req.query.hash;

	let file = await ipfs.get(hash);

	if(file) {
		//file[0].content = file[0].content.toString('base64');
		let ret = retcode.getSuccess();
		ret['data'] = file[0].content.toString('base64');
		res.send(ret);
		return;
	}

	res.send(retcode.getFail());
});


router.post('/', function(req, res, next) {
  	res.send('response document');
});

module.exports = router;
