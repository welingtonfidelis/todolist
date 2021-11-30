
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Todo extends Model{}

Todo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    modelName: 'todos',
    timestamps: true,
});

module.exports = Todo;