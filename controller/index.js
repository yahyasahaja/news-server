const express = require('express')
const app = express()
const conn = require('../models')
const Sequelize = require('sequelize')


// app.get('/statuses', async (req, res) => {
//     let statuses = await conn.models.Status.findAll()
//     res.json(statuses)
// })

// app.get('/users', async (req, res) => {
//     let users = await conn.models.User.findAll()
//     res.json(users)
// })

// GET /feeds?search=abc
app.get('/feeds', async (req, res) => {
    let query = req.query.search
    let options = {
        raw: true
    }

    if (query) options.where = {
        text: {
            [Sequelize.Op.like]: `%${query}%`
        }
    }
    
    let feeds = await conn.models.Status.findAll(options)
    
    for (let feed of feeds) {
        feed.user = user = await conn.models.User.findOne({
            where: {
                id: feed.user_id
            }
        })
    }

    res.json(feeds)
})

module.exports = app;