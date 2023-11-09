var Apartment = require('../models/Apartment');
// List of all Apartments
exports.Apartment_list = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment list');
};
// for a specific Apartment.
exports.Apartment_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment detail: ' + req.params.id);
};
// Handle Apartment create on POST.
exports.Apartment_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment create POST');
};
// Handle Apartment delete form on DELETE.
exports.Apartment_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment delete DELETE ' + req.params.id);
};
// Handle Apartment update form on PUT.
exports.Apartment_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment update PUT' + req.params.id);
};

// List of all Apartment
exports.Apartment_list = async function(req, res) {
    try{
    theApartments = await Apartment.find();
    res.send(theApartments);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };