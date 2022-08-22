const dbconfig = require('../config/db');

const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host:dbconfig.HOST,
        dialect:dbconfig.dialect
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("Connected....")
})
.catch(error=>{
    console.log("Error",error)
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./prodctModel')(sequelize,DataTypes)
db.reviews = require('./reviewModel')(sequelize,DataTypes)
db.user = require('./userModel')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log("All models were synchronized successfully.");
})


//has many
db.products.hasMany(db.reviews,{
    foreignKey:"product_id",
    as : "review"
})

db.reviews.belongsTo(db.products,{
    foreignKey:"product_id",
    as : "product"
})

module.exports = db;

