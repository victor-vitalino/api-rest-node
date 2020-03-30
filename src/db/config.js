const Sequelize = require('sequelize');
const db = 'fazenda'
const user = 'postgres'
const pass = 'superuser'

const sequelize = new Sequelize(db, user, pass,{
    host:'127.0.0.1',
    dialect:'postgres',
    timestamps: false,
})

async function isConnected(){
    sequelize
    .authenticate()
    .then(function() {
        console.log('Connection has been established successfully.');
        return true;
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
        return false;
    });
}
// isConnected()

module.exports = sequelize;