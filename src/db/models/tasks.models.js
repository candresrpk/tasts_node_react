import { Model, DataTypes, Sequelize } from "sequelize";

export const TASK_TABLE = 'tasks'

export const TaskSchema = {
    id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: true,
        type: DataTypes.STRING
    },
    done: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN
    },
    color: {
        allowNull: true,
        type: DataTypes.STRING
    },
    created: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: DataTypes.DATE
    },
    
}

export class Task extends Model {
    static associate(){
        // associate
    }

    static config(sequelize){
        return { 
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Task',
            timestamps: false
        }
    }
}