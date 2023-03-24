const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = "users";
const userScheme = {
    correo:{
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING(200)
    },
    nombres:{
        allowNull: false,
        type: DataTypes.STRING(120)
    },
    apellidos:{
        allowNull: false,
        type: DataTypes.STRING(120)
    },
    clave:{
        allowNull: false,
        type: DataTypes.STRING(200)
    },
    rol:{
        allowNull: false,
        type: DataTypes.STRING(30)
    },
}

class User extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, userScheme, User }