const conn = require('../models/connection')
const Status = require('./Status')
const Users = require('./Users')

module.exports = async () => {
    await conn.models.User.bulkCreate(Users)
    await conn.models.Status.bulkCreate(Status)
    let user = await conn.models.User.findOne({where: {id: 1}})
    // console.log(await user.getStatuses())
}
