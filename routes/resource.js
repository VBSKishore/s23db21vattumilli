var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Apartment_controller = require('../controllers/Apartment');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Apartment ROUTES ///
// POST request for creating a Apartment.
router.post('/Apartment', Apartment_controller.Apartment_create_post);
// DELETE request to delete Apartment.
router.delete('/Apartment/:id', Apartment_controller.Apartment_delete);
// PUT request to update Apartment.
router.put('/Apartment/:id', Apartment_controller.Apartment_update_put);
// GET request for one Apartment.
router.get('/Apartment/:id', Apartment_controller.Apartment_detail);
// GET request for list of all Apartment items.
router.get('/Apartment', Apartment_controller.Apartment_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"Apartments", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
