const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    job_description:{
        type:String,
    },
    job_name:{
        type:String,
        required:true
    }
},{
    collection:'item_jobs'
})

const ItemModel = mongoose.model('Item', itemSchema)

module.exports = ItemModel