const UserModel = require('../models/UserModel')
const Enc = require('../auth/UserEnc')
const jwt = require('../auth/jwt')

module.exports = {
    async Logar(req, res) {
        try {
            // validando login via header
            const [hashType, hash] = req.headers.authorization.split(' ') // recebendo dados
            const [usuario, pass] = Buffer.from(hash, 'base64').toString().split(':') // decodificando           
            let user = await UserModel.findOne({ where: { usuario }, raw: true });// buscando user na base

            if (!user) return res.status(401).send("Usuario Inválido!")

            const verified = await Enc.valida(pass, user.pass) // validando password
            if (verified) {
                user.pass = undefined
                user.level = undefined

                // gerando token
                const token = jwt.GenToken({
                    id: user.id,
                    usuario: user.usuario
                })
                return res.json({ ...user, token })
            }
            return res.status(401).send('Senha Inválida!')
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    async validar(req, res) {
        try {
            const { token } = req.body
            const valid = jwt.Decode(token)
            console.log(valid)

            return res.json(valid)
        } catch (error) {
            return res.status(401).send(error.message)
        }
    }
}