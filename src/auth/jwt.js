const jwt = require('jsonwebtoken')
const secret = 'jhdkjadhkadb5465&$%#'

// jwt.sign = recebe o objeto no qual sera gerado o token, a chave de validacao, e o tempo de expiração
//jwt.verify = verifica se o token ainda é valido
module.exports = {
    GenToken(obj) {
        return jwt.sign(obj,secret,{expiresIn:84000})
    },
    Decode(token){
        return jwt.verify(token, secret)
    }
}

