// data we are working with
let models = require('../models/flight')
const getTheTime = require('../thetime');
const getTheDate = require('../thedate');


const getFlight = (req, res) => {
    res.status(200).json({ success: true, data: models })
}

const getSpecificFlight = (req, res) => {
    const { id } = req.params
    const singleFlight = models.find((eachFlight) => eachFlight.id === Number(id))

    if (!singleFlight) {
        return res.status(404).send('The flight with the given ID was not found.')
    }
    return res.json(singleFlight)
}

const bookFlightPostman = (req, res) => {
    const { title, price } = req.body
    if (!(title && price)) {
        return res.status(400).json({ success: false, message: 'please provide title and price values' })
    }
    const eachFlight = {
        id: models.length + 1,
        title: title,
        time: getTheTime,
        price: price,
        date: getTheDate
    }
    models.push(eachFlight)
    res.status(201).json({ success: true, data: models })
}

const updateFlight = (req, res) => {
    const { id } = req.params
    const { title, price } = req.body

    const eachFlight = models.find((eachFlight) => eachFlight.id === Number(id))

    if (!eachFlight) {
        return res.status(404).json({ success: false, message: `no person with id ${id}` })
    }

    const newFlight = models.map((eachFlight) => {
        if (eachFlight.id === Number(id)) {
            if (title) {
                eachFlight.title = title
            }
            if (price) {
                eachFlight.price = price
            }
        }
        return eachFlight

    })
    res.status(200).json({ success: true, data: newFlight })
}

const deleteFlight = (req, res) => {
    const { id } = req.params

    const eachFlight = models.find((eachFlight) => eachFlight.id === Number(id))

    if (!eachFlight) {
        return res.status(404).json({ success: false, msg: `There is no flight with id ${id}` })
    }

    const newFlight = models.filter((eachPerson) => eachPerson.id !== Number(id))
    return res.status(200).json({ success: true, data: newFlight })
}



module.exports = {
    getFlight,
    getSpecificFlight,
    bookFlightPostman,
    updateFlight,
    deleteFlight
}