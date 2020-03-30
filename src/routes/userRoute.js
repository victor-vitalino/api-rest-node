// rotas para usuarios
const midd = require('../middleware/verToken')
const express = require('express')
var routes = express.Router()
const UserController = require('../controllers/UserController')


routes.post('/', UserController.create)
routes.get('/show', UserController.show)
routes.get('/show/:id', UserController.find)
routes.put('/:id', UserController.update)
routes.delete('/:id', UserController.destroy)
module.exports = routes;

