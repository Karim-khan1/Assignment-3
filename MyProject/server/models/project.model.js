import mongoose from "mongoose";


const projectSchema =
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


const Project =
    mongoose.model(
        "Project",
        projectSchema
    );


export default Project;