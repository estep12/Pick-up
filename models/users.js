const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstName: {
        type: STRING,
        required: [true]
    },

    lastName: {
        type: STRING,
        required: [true]
    },
},

{timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;