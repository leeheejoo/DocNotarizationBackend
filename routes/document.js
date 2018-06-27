const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

	let hash = req.query.hash;
	let file = await ipfs.get(hash);
	//console.log(file[0].content.toString('utf8'));
	file[0].content = file[0].content.toString('base64');
	res.send(file);
});


router.post('/', function(req, res, next) {
  	res.send('response document');
});

module.exports = router;
