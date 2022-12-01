const {Sequelize} = require('sequelize');

const db = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username:'postgres',
    password: '321654',
    database: 'users-spaghetti' 

})

module.exports = db
