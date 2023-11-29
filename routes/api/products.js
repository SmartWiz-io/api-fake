const express = require('express');
const router = express.Router();

// GET all products
router.get("/getUploadUrl", (req, res) => {
	const reqparams = req.query
	const incoming = req.body; 
	const fakedata = `https://upload.aws.s3.something.com\?bid=${reqparams.businessId}&uid=${reqparams.userId}`;
	res.json(JSON.stringify(fakedata));
});


module.exports = router; 