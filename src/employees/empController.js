const Employee = require('./empModel');

var createEmployee = (req, res) => {
    let employee = new Employee({
        empId: req.body.empId,
        name: req.body.name,
        title: req.body.title
        });
    employee.save(function(err){
        if(err) {
            console.log("Employee Not Saved!");
            return;
        }
        res.send("Employee Created!");
    });
};


var listEmployees = (req, res) => {
    Employee.find(function (err, employees) {
        if (err) return console.error(err);
        res.send(employees);
    }); 
}

var empDetails = (req, res) => {
    Employee.find({empId: req.params.empId}, function (err, employees) {
        if (err) return console.error(err);
        res.send(employees);
    });
}

module.exports = {
    createEmployee: createEmployee,
    listEmployees: listEmployees,
    empDetails: empDetails
}