const Router = require('express');

const routes = new Router();

const UserController = require('./app/Controllers/UserControllers')


routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/',(req,res) =>{return res.send('teste')})

module.exports = routes;