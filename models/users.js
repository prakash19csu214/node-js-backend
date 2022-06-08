const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      suite: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zipcode: {
        type: String,
        required: true,
      },
      geo: {
        lat: {
          type: Number,
          required: true,
        },
        lat: {
          type: Number,
          required: true,
        },
      },
    },
    phone: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    company: {
      name: {
        type: String,
        required: true,
      },
      catchphrase: {
        type: String,
      },
      bs: {
        type: String,
        required: true,
      },
    },
  });
  
var users = mongoose.model('user', userSchema);

module.exports = users;