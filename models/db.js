const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')

const sh = new mongoose.Schema({}, { strict: false })

const Employees = mongoose.model('Employees', sh)

module.exports = Employees