const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user name is required!"],
        // unique: [true, "user name must be unique!"]
    },
    email: {
        type: String,
        required: [true, "email is required!"],
        unique: [true, "email must be unique!"]
    },
    password: {
        type: String,
        required: [true, "password is required!"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: [true, "role is required!"],
    },
    shop: {
        type: String,
        required: ()=>{return this.role === "admin"}
    },
    Products: 
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            }
        ],
    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product' ,
        }
    ]
    
    
});

const User = mongoose.model('User', userSchema)
module.exports = User;