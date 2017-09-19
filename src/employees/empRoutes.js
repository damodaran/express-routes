const empRoutes = require('express').Router();
const empController = require('./empController');
//const Employee = require('../models/employee_model');

empRoutes.post('/', empController.createEmployee);

empRoutes.get('/', empController.listEmployees);

empRoutes.get('/:empId', empController.empDetails);

module.exports = empRoutes;

  