var employeeController = require('../controllers/employee.controller')

var express = require('express')

var router = express.Router();

router.get('/', employeeController.index)

router.post('/', employeeController.insert)

router.get('/list', employeeController.listEmployees)

router.get('/:id', employeeController.employee)

router.get('/delete/:id', employeeController.deleteEmployee)

module.exports = router