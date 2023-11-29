var express = require('express');
const Apartment_controlers= require('../controllers/Apartment');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/login");
  } 
/* GET Apartments */
router.get('/', Apartment_controlers.Apartment_view_all_Page );
router.get('/Apartment/:id',Apartment_controlers.Apartment_detail);

/* GET detail Apartment page */
router.get('/detail', secured, Apartment_controlers.Apartment_view_one_Page);

/* GET create Apartment page */
router.get('/create', secured, Apartment_controlers.Apartment_create_Page);

/* GET update costume page */
router.get('/update', secured, Apartment_controlers.Apartment_update_Page);


/* GET delete Apartment page */
router.get('/delete', secured, Apartment_controlers.Apartment_delete_Page);



module.exports = router;

