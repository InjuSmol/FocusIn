const mongoose = require("mongoose")

const PinSchema = new mongoose.Schema(
    {
        username: {
            type: String, 
            required: true,
        },
        title: {
            type: String, 
            requied: true,
            max: 50
        },
        description: {
            type: String,
            required: true, 
            min: 3,
            max: 50
        },
        rating:{
            type: Number, 
            min: 0,
            max: 5
        },
        lat: {
            type: Number, 
            require: true
        },
        long: {
            type: Number,
            require: true
        }
    },
    {timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema)