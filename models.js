let mongoose = require("mongoose");

let schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: false
    }
});

let user = module.exports = mongoose.model("users", schema);

module.exports.get = (callback, limit) => {
    user.find(callback).limit(limit);
}
