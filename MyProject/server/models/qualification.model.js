import mongoose from "mongoose";


const qualificationSchema =
    new mongoose.Schema(

        {
            title: {
                type: String,
                required: true,
                trim: true
            },

            completionDate: {
                type: Date,
                required: true
            },

            description: {
                type: String,
                required: true,
                trim: true
            }
        },

        {
            timestamps: true
        }

    );


const Qualification =
    mongoose.model(
        "Qualification",
        qualificationSchema
    );


export default Qualification;