// Reaction (SCHEMA ONLY)
const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// reactionId
// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
// reactionBody
// String
// Required
// 280 character maximum
reactionBody: {
    type: String,
    required: true,
    maxlength: 280
    },
// username
// String
// Required
username: {
    type: String,
    required: true
    },
// createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
    }
    },
// Schema Settings
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
{
    toJSON: {
      getters: true
    },
    id: false
  }
);

module.exports = reactionSchema;
