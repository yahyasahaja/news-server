const conn = require('./connection');
const Status = require('./Status');
const User = require('./User')

//relations
User.hasMany(Status,{foreignKey: 'user_id'})
Status.belongsTo(User, {foreignKey: 'user_id'})


//sync
const giveSeeds = require('../seeds')
var force = true
conn.sync({
    force
}).then(async ()=> {
    console.log("database syncronized")
    if (force) {
        await giveSeeds()    
    }
    
}).catch((error)=>{
    console.log("Error", error)
})

module.exports = conn