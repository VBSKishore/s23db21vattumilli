var express = require('express');
const Apartment_controlers= require('../controllers/Apartment');
var router = express.Router();
/* GET Apartments */
router.get('/', Apartment_controlers.Apartment_view_all_Page );

/* GET detail Apartment page */
router.get('/detail', Apartment_controlers.Apartment_view_one_Page);

/* GET create Apartment page */
router.get('/create', Apartment_controlers.Apartment_create_Page);

/* GET create update page */
router.get('/update', Apartment_controlers.Apartment_update_Page);

/* GET delete Apartment page */
router.get('/delete', Apartment_controlers.Apartment_delete_Page);



module.exports = router;

