const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: [{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        }],
        reactionBody: [{
            type: String,
            required: true,
            maxlength:280,
        }],
        createdAt: [{
            type: Date,
            default: Date.now,
        }],
        username: [{
            type: String,
            required:true,
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

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: [{
            type: String,
            required: true,
            maxlength:280,
        }],
        createdAt: [{
            type: Date,
            default: Date.now,
        }],
        username: [{
            type: String,
            required:true,
        }],
        reactions: [reactionSchema]
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