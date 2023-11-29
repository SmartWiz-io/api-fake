const express = require('express');
const router = express.Router();

// GET all products
router.get("/getUploadUrl", async (req, res) => {
	const incoming = req.body; 
	const fakedata = `https://upload.aws.s3.something.com/bid=${incoming.businessId}&uid=${incoming.userId}`;
	res.json(fakedata);
});


module.exports = router; 