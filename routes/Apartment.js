var express = require('express');
const Apartment_controlers= require('../controllers/Apartment');
var router = express.Router();
/* GET Apartments */
router.get('/', Apartment_controlers.Apartment_view_all_Page );

/* GET detail costume page */
router.get('/detail', Apartment_controlers.Apartment_view_one_Page);



module.exports = router;

