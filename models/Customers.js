const mongoose = require("mongoose")

const schema = mongoose.Schema({
	username: String,
	name: String,
    address: String,
    birthdate: Date,
    email: String,
    active: Boolean,
    accounts: [Number],
    tier_and_details: { tier: String, id: String, active: Boolean, benefits: [String] },
}, 
{ strict: true }
)

schema.index({username: 'text', 'name': 'text', address: 'text', email: 'text'});

module.exports = mongoose.model("customers", schema)