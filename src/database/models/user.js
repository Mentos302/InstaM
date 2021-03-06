const mongoose = require('mongoose')

const userScheme = mongoose.Schema(
  {
    chat_id: {
      type: Number,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    reg_date: {
      type: String,
      required: true,
    },
    last_activity: { type: String },
    instagram_id: { type: String },
  },
  { versionKey: false }
)

module.exports = userScheme
