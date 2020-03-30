const express = require('express') 
const router = express.Router();
const midd = require('./middleware/verToken')

// rotas do sistema na pasta routes
const userRoute = require('./routes/userRoute')
const loginRoute = require('./routes/loginRoute')

//adicionando ao router as rotas da pasta
router.use('/user', midd.verificaToken , userRoute)
router.use('/login', loginRoute)


// exportando rotas para o server
module.exports = router;


