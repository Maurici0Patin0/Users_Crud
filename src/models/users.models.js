
const {DataTypes} = require ('sequelize')
const db = require ('../utils/database')

const Users = db.define('users',{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name:{
        type:DataTypes.STRING,
        defaultValue: 'Anonymous'
    },
    last_name:{
        type:DataTypes.STRING,
        defaultValue: 'Anonymous'
    },
    email:{
        type:DataTypes.STRING,
        defaultValue: 'null'
    },

    password:{
        type:DataTypes.STRING
    },

    birthday:{
        type:DataTypes.INTEGER
    }

},{
    timestamos:false
})

module.exports=Users

