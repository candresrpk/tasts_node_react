import { Model, DataTypes, Sequelize } from "sequelize";

export const AUTH_TABLE = 'auth'

export const AuthSchema = {
    id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING
    },
    username: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    
}

export class Auth extends Model {
    static associate(){
        // associate
    }

    static config(sequelize){
        return { 
            sequelize,
            tableName: AUTH_TABLE,
            modelName: 'Auth',
            timestamps: false
        }
    }
}