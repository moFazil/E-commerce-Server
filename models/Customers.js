const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    Email : String,
    Password : String,
})

const CustomerModel = mongoose.model("Customers",CustomerSchema)
module.exports =CustomerModel