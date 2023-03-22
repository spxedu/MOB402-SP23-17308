var express = require('express');
var router = express.Router();
var spCtrl = require("../controllers/sanpham.controller");

// list sp
router.get('/', spCtrl.list );

router.get('/add', spCtrl.add);

module.exports = router;
