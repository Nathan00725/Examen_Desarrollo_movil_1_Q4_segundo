const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('logApp','root','fabuloso25',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;