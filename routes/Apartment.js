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

/* GET detail Apartment page */
router.get('/detail', Apartment_controlers.Apartment_view_one_Page);

/* GET create Apartment page */
router.get('/create', Apartment_controlers.Apartment_create_Page);

/* GET update costume page */
router.get('/update', secured, Apartment_controlers.Apartment_update_Page);


/* GET delete Apartment page */
router.get('/delete', Apartment_controlers.Apartment_delete_Page);



module.exports = router;

