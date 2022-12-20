const Destination = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newDestination,
    create,
    addToList
}

function create(req, res) {
    const s = req.body.arrival;
    req.body.arrival = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
    Destination.create(req.body, function (err, destination) {
        res.redirect('/destinations/new');
    });
}
function newDestination(req, res) {
    Destination.find({}, function (err, destinations) {
        res.render('destinations/new', {
            title: 'Add Destination',
            destinations
        });
    })
}

function addToList(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.list.push(req.body.destinationId)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}