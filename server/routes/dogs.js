const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const dogs = [
    {
        "_chipId": "5bafde56b55be3796eb835b5",
        "chipId": '420',
        "type": "Dog",
        "name": 'Alaska Chipopo Fluffskin',
        "picture": "https://images.dog.ceo/breeds/husky/n02110185_4522.jpg",
        "breed": "Siberian Husky",
        "sex": "F",
        "color": "white",
        "dateOfBirth": "2016-02-06",
        "bloodType": "DEA",
        "weight": 30,
        "numOfVaccines": "",
        "lastChange": "",
        "owner": "0x23054",
        "contactNumber": "+1 (915) 518-3554",
        "address": "200 Eaton Court, Riegelwood, Palau, 3093",
        "registered": "2017-07-25",
        "ownerId": 1
    },
    {
        "_chipId": "5bb1e46de5c665cfd009703e",
        "chipId": 75,
        "type": "dog",
        "name": "Ina",
        "picture": "https://images.dog.ceo/breeds/doberman/n02107142_14813.jpg",
        "breed": "Doberman",
        "sex": "F",
        "color": "gray",
        "dateOfBirth": "2016-02-27",
        "bloodType": "DEA+",
        "weight": 13,
        "numOfVaccines": "",
        "lastChange": "2018-02-02",
        "owner": "0x57693",
        "contactNumber": "+1 (906) 522-2382",
        "address": "116 Harman Street, Staples, New York, 6108",
        "registered": "2018-04-07",
        "ownerId": 9
    },
    {
        "_chipId": "5bb1e46d43a16d3a7d5d96b8",
        "chipId": 27,
        "type": "dog",
        "name": "Lauri",
        "picture": "https://images.dog.ceo/breeds/malinois/n02105162_1757.jpg",
        "breed": "Malinois",
        "sex": "M",
        "color": "brown",
        "dateOfBirth": "2016-02-03",
        "bloodType": "DEA",
        "weight": 11,
        "numOfVaccines": "",
        "lastChange": "2018-06-23",
        "owner": "0x26036",
        "contactNumber": "+1 (954) 537-3343",
        "address": "188 Sunnyside Court, Venice, Louisiana, 4567",
        "registered": "2016-08-10",
        "ownerId": 7
    },
    {
        "_chipId": "5bb1e46d47fc236b8af27054",
        "chipId": 92,
        "type": "dog",
        "name": "Boone",
        "picture": "https://images.dog.ceo/breeds/germanshepherd/n02106662_1637.jpg",
        "breed": "German Shepherd",
        "sex": "F",
        "color": "gray",
        "dateOfBirth": "2016-01-21",
        "bloodType": "DEA",
        "weight": 27,
        "numOfVaccines": "",
        "lastChange": "2018-05-29",
        "owner": "0x54954",
        "contactNumber": "+1 (812) 534-2621",
        "address": "992 Humboldt Street, Tonopah, Florida, 1094",
        "registered": "2016-07-09",
        "ownerId": 10
    },

]

// @route GET /dogs
// @desc get specific dog by cheap id
router.get('/getdogbycheapid/:id', (req, res) => {
    const dog = dogs.find(d => parseInt(d.chipId) === parseInt(req.params.id));
    if (dog) {
        res.json(dog);
    } else {
        res.status(400).send('Dog not exists');
    }
});

// @route GET /dogs/all
// @desc get all dogs
router.get('/all', (req, res) => {
    res.status(200).json(dogs);
});


module.exports = router;