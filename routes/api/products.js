const express = require('express');
const router = express.Router();

// GET all products
router.get("/getUploadUrl", async (req, res) => {
	const reqparams = req.query
	const incoming = req.body; 
	const fakedata = `{"bid":"${reqparams.businessId}","uid":"${reqparams.userId}"}`;
	res.json(fakedata);
});


module.exports = router; 