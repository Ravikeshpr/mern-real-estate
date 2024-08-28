import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((error) => {
        console.log("Connection to DB error", error);
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
