const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        //trims whitespace of the end 
        minlength:3
        // has to be atleast 3 chars long
    },
},{
    timestamps:true,
    //gives us timestamps on creation and modification
});

const User = mongoose.model('User', userSchema);

module.exports = User;
