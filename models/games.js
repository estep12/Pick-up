const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema ({
    date: Date,

    score: {
        type: Number,
        default: 0,
        required: [true]
    },

    user: {type: Schema.Types.ObjectId, ref: "User"}

},
{timestamps: true });

const Game = mongoose.model("Game", gameSchema);

module.exports = Game