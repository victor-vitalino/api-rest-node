const UserModel = require('../models/UserModel')
const Enc = require('../auth/UserEnc')
const dataValidation = require('../util/ValidationSequelize')

module.exports = {
    async create(req, res) {
        try {
            let { nome, usuario, pass, pass2 } = req.body
            const resp = await UserModel.findOne({ where: { usuario }, raw: true });
            console.log(resp)


            if (resp != null) {
                return res.send("Este nome de usuario já existe!")
            } else {

                pass = await Enc.encripta(pass2)
                if (pass) {

                    const response = await UserModel.create({ nome, usuario, pass })
                    return res.status(200).send("Cadastrado com Sucesso")
                }
            }
        } catch (error) {
            const lista = dataValidation.ListaErros(error.errors)
            return res.status(400).send(lista)
        }


    },
    async show(req, res) {
        let page = req.query.page || 0
        let pageAtual = page
        let limit = 6

        page = pageAtual * limit

        const response = await UserModel.findAll(({
            limit: limit,
            offset: page,
            raw: true
        }))

        users = response.map(user => { // retirando o pass do response
            user.pass = undefined
            return user
        })
        return res.json(users)

    },
    async find(req, res) {
        const { id } = req.params
        const response = await UserModel.findByPk(id)

        return res.json(response)
    },
    async update(req, res) {
        try {


            let { nome, usuario, pass } = req.body
            const { id } = req.params
            let user = { nome, usuario }
            console.log(user)

            if (pass != "" || pass != null) {
                pass = await Enc.encripta(pass)
                user.pass = pass
            }
            console.log(user)


            const response = await UserModel.findByPk(id)
            if (response.id == id) {
                const resp = await UserModel.update(
                    user,
                    { where: { id } }
                )
                return res.json(resp)
            } else {
                return res.send("Erro ao Atualizar!")
            }
        } catch (error) {
            const lista = dataValidation.ListaErros(error.errors)
            return res.status(400).send(lista)
        }
    },
    async destroy(req, res) {
        const { id } = req.params
        const response = await UserModel.destroy({ where: { id } })
        if (response == 1) {
            console.log(response)
            return res.send("Usuario Excluido Com Sucesso!")
        } else {
            return res.send(`Esse Usuario não existe!`)
        }
    }

}


