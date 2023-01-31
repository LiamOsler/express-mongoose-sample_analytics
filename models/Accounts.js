const mongoose = require("mongoose")

const schema = mongoose.Schema({
	account_id: Number,
	limit: Number,
    products: [String]}
)

module.exports = mongoose.model("accounts", schema)