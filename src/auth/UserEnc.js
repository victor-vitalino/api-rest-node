const bcrypt = require('bcryptjs')

module.exports = {
    async encripta(pass) {
        return await new Promise((resolve, reject) => {
            bcrypt.hash(pass, 10, function (err, hash) {
                if (err) reject(err)
                resolve(hash)
            });
        })
        
    },
    async valida(pass, hash) {
        return await new Promise((resolve, reject) => {
            bcrypt.compare(pass, hash, function (err, result) {
                if (err) reject(err)
                resolve(result)
            });
        })
       

    }
}