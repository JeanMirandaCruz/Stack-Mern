
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,

            //
            index:true,
            sparse:true
        }
    }, {
        timestamps: true
    });

module.exports = model('User', userSchema);