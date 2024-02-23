const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Product", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        size: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        type:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {timestamps: true});
};