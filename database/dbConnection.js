import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MEDICALAPPOINTMENT",
    })
    .then(() => {
      console.log("Connected to database:)");
    })
    .catch((error) => {
      console.log(error, " error while connecting db");
    });
};
