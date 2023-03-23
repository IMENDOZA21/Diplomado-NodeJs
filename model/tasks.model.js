const { Model, DataTypes, Sequelize } = require('sequelize');

const TASK_TABLE = "tasks";
const taskScheme = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre:{
        allowNull: false,
        type: DataTypes.STRING
    },
    completado:{
        type: DataTypes.BOOLEAN,
        default: false
    }
}

class Task extends Model{
    static config(sequelize){
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Task',
            timestamps: false
        }
    }
}

module.exports = { TASK_TABLE, taskScheme, Task }