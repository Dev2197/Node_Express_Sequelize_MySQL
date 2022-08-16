
module.exports = (sequelize,DataTypes)=>{
    const Review = sequelize.define("review",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        rating:{
            type:DataTypes.FLOAT
        }
    })

    return Review
}