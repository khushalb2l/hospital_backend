import mongoose from "mongoose";

import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name should atleast of 3 character"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name should atleast of 3 character"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Enter valid email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "should be of 10 digits!"],
    maxLength: [10, "should be of 10 digits!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "atleast 10 character long!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
