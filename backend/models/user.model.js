const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        //if someone adds spaces it'll be trimmed off
        minlength: 3
    },
    //single field
    //validation to the user name
}, {
    timestamps: true
    //automatically create fields when created
});

const User = mongoose.model('User', userSchema);

module.exports = User;