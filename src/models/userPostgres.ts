import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const UserPostgres = sequelize.define("User", {
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, 
{
    tableName: "users",
    timestamps: false,
})

export default UserPostgres;