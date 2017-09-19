const mongoose = require('mongoose');
let Schema = mongoose.Schema;

var employeeSchema = new Schema({
    empId:   String,
    title:  String,
    name: String,

    date: { type: Date, default: Date.now },
    active: {type: Boolean, default: false},
    phone: {
        mobile: Number,
        landline:  Number
    }
});

var Employee = mongoose.model('employees', employeeSchema);

module.exports = Employee;