// rotas para usuarios

const express = require('express')
const routes = express.Router()
const loginController = require('../controllers/LoginController')

routes.get('',loginController.Logar)
routes.post('/valid',loginController.validar)

module.exports = routes