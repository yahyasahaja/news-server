const Sequelize = require('sequelize');
const conns = require('./connection');

module.exports = conns.define(
    'User',
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
    
)

