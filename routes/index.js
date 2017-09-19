const routes = require('express').Router();
const empRoutes = require('../src/employees/empRoutes');

routes.use('/employee', empRoutes);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
