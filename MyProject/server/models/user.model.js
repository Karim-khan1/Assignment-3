import mongoose from "mongoose";


const userSchema =
    new mongoose.Schema(

        {
            name: {
                type: String,
                required: true,
                trim: true
            },

            email: {
                type: String,
                required: true,
                unique: true,
                trim: true,
                lowercase: true
            },

            role: {
                type: String,
                enum: ["user", "admin"],
                default: "user",
                required: true
            },

            passwordHash: {
                type: String,
                required: true,
                select: false
            }
        },

        {
            timestamps: true
        }

    );


const User =
    mongoose.model(
        "User",
        userSchema
    );


export default User;