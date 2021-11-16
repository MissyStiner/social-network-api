// Thought
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

// thoughtText
// Stringgit
// Required
// Must be between 1 and 280 characters
const thoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 1,
        maxlength: 280
    },
// createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
// username (The user that created this thought)
// String
// Required
    username: {
        type: String,
        required: true
    },
// reactions (These are like replies)
// Array of nested documents created with the reactionSchema
    reactions: [reactionSchema]
    },
    {
        toJSON: {
        getters: true
    },
        id: false
    }
    );
// Schema Settings
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
    const Thought = model('Thought', thoughtSchema);
  
    module.exports = Thought;
  