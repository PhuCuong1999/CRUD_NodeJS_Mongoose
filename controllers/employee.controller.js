const Employees_Model = require('../models/empoyee.model')

module.exports.index = (req, res) => {
    res.render('employee/addOrEdit', {
        name: 'User index'
    });
}

module.exports.insert = (req, res) => {

    Employees_Model.create(req.body)

    res.redirect('employees/list')
}

module.exports.listEmployees = (req, res) => {

    Employees_Model.listEmployees(function (a, b) {
        if (a === 'data') {
            res.render('employee/list', {
                list: b
            })
        }
    })
}

module.exports.employee = (req, res) => {
    Employees_Model.getEmployee(req.params.id, function (a, b) {
        if (a === 'data') {
            res.render('employee/addOrEdit', {
                em: b[0]
            })
        }
    })
}

module.exports.deleteEmployee = (req, res) => {
    Employees_Model.deleteEmployee(req.params.id, function (a, b) {
        if (a) {
            console.log(a)
            res.redirect('/employees/list')
        } else {
            console.log(b)
            res.redirect('/employees/list')
        }
    })
}