module.exports = (sequelize,DataTypes)=>{
    const Product = sequelize.define("product",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type:DataTypes.FLOAT
        }
    })

    return Product
}