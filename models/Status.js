const Sequelize = require('sequelize')
const conn = require('./connection')

module.exports = conn.define(
    'Status',
    {
        text: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }
    
)

