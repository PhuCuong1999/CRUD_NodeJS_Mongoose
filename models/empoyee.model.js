var Employees = require('./db')

module.exports.create = (data) => {
    //Employees.create(data)
    var { EmID, ...Em } = data;
    Employees.find({ _id: EmID }).lean().exec((err, em) => {
        if (err) {
            Employees.create(Em)
        } else {
            Employees.updateOne({ _id: EmID }, Em, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(data)
                }
            })
        }
    })
}

module.exports.listEmployees = (callback) => {
    Employees.find({}).lean().exec((err, em) => {
        if (err) {
            callback('err', err)
        } else {
            callback('data', em)
        }
    })
}

module.exports.getEmployee = (id, callback) => {

    Employees.find({ _id: id }).lean().exec((err, data) => {
        if (err) {
            callback('err', err)
        } else {
            callback('data', data)
        }
    })
}

module.exports.deleteEmployee = (id, callback) => {
    Employees.deleteOne({ _id: id }, callback)
}