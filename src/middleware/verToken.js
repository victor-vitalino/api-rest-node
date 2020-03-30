const jwt = require('../auth/jwt')

module.exports = {
    verificaToken(req, res, next) {
        try {
            const auth = req.headers.authorization
            if (auth) {
                const [, token] = auth.split(" ")
                const valid = jwt.Decode(token)
                next()
            } else {
                return res.send(401, "Token não Recebido")
            }
        } catch (error) {
            return res.status(401).send(error.message)
        }
    }
}