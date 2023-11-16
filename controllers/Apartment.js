var Apartment = require('../models/Apartment');
// List of all Apartments
exports.Apartment_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartment list');
};
// for a specific Apartment.
exports.Apartment_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartment detail: ' + req.params.id);
};
// Handle Apartment create on POST.
exports.Apartment_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartment create POST');
};
// Handle Apartment delete form on DELETE.
exports.Apartment_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartment delete DELETE ' + req.params.id);
};
// Handle Apartment update form on PUT.
exports.Apartment_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartment update PUT' + req.params.id);
};

// List of all Apartment
exports.Apartment_list = async function (req, res) {
    try {
        theApartments = await Apartment.find();
        res.send(theApartments);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.Apartment_view_all_Page = async function (req, res) {
    try {
        theApartments = await Apartment.find();
        res.render('Apartment', { title: 'Apartment Search Results', results: theApartments });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Apartment create on POST.
exports.Apartment_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Apartment();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Apartment_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.price = req.body.price;
    document.Location = req.body.Location;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Apartment.
exports.Apartment_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Apartment.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//Handle Apartment update form on PUT.
exports.Apartment_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Apartment.findById(req.params.id)
        // Do updates of properties
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.price) toUpdate.price = req.body.price;
        if (req.body.Location) toUpdate.Location = req.body.Location;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle Apartment delete on DELETE.
exports.Apartment_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Apartment.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.Apartment_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Apartment.findById(req.query.id)
        res.render('Apartmentdetail',
            { title: 'Apartment Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a Apartment.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Apartment_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Apartmentcreate', { title: 'Apartment Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a Apartment.
// query provides the id
exports.Apartment_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Apartment.findById(req.query.id)
    res.render('Apartmentupdate', { title: 'Apartment Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };




