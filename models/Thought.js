const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: [{
            type: String,
            required: true
        }],
        createdAt: [{
            type: Date,
            default: Date.now,
        }],
        username: [{
            type
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;