const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = "products";
const productScheme = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING(100)
    },
    price:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    urlImage:{
        allowNull: false,
        type: DataTypes.STRING(100)
    },
    isBlock:{
        type: DataTypes.BOOLEAN,
        default: false
    }
}

class Product extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = { PRODUCT_TABLE, productScheme, Product }