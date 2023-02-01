const mongoose = require("mongoose")

const schema = mongoose.Schema({
    account_id: Number,
    transaction_count: Number,
    bucket_start_date: Date,
    bucket_end_date: Date,
    transactions: 
        [{
            date: Date, 
            amount: Number, 
            transaction_code: String, 
            description: String, 
            balance: Number,
            price: String,
            total: String
        }]
})

module.exports = mongoose.model("transactions", schema)