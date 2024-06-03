import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
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
    minLength: [10, "phone number should be of 10 digits!"],
    maxLength: [10, "phone number should be of 10 digits!"],
  },
  aadhar: {
    type: String,
    required: true,
    minLength: [12, "Aadhar number should be of 12 digits!"],
    maxLength: [12, "Aadhar number should be of 12 digits!"],
  },
  dob: {
    type: Date,
    required: [true, "DOB is required"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  appointment_date: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  hasVisited: {
    type: Boolean,
    default:false,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
