const Sequelize = require(('Sequelize'))
const sequelize = require('../db/config') // conexao com o banco

const User = sequelize.define('usuarios',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    usuario:{
        type:Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Este campo não pode ser vazio!"
            }
        }
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Este campo não pode ser vazio!"
            }
        }
    },
    pass:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                msg: "Este campo não pode ser vazio!"
            }
        }
    },
    level:{
        type: Sequelize.INTEGER,
        defaultValue:0
    }
}, {timestamps:false});

module.exports = User;