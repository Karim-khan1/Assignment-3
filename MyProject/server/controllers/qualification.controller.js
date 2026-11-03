import Qualification
    from "../models/qualification.model.js";


export const getQualifications =
    async (req, res) => {

        try {

            const qualifications =
                await Qualification.find();

            res.status(200).json(
                qualifications
            );

        }

        catch (error) {

            res.status(500).json({
                message:
                    "Unable to retrieve qualifications.",
                error:
                    error.message
            });

        }

    };



export const getQualificationById =
    async (req, res) => {

        try {

            const qualification =
                await Qualification.findById(
                    req.params.id
                );


            if (!qualification) {

                return res.status(404).json({
                    message:
                        "Qualification not found."
                });

            }


            res.status(200).json(
                qualification
            );

        }

        catch (error) {

            res.status(400).json({
                message:
                    "Invalid qualification ID.",
                error:
                    error.message
            });

        }

    };



export const createQualification =
    async (req, res) => {

        try {

            const {
                title,
                completionDate,
                description
            } = req.body;


            if (
                !title ||
                !completionDate ||
                !description
            ) {

                return res.status(400).json({
                    message:
                        "Title, completion date, and description are required."
                });

            }


            const qualification =
                await Qualification.create({
                    title,
                    completionDate,
                    description
                });


            res.status(201).json(
                qualification
            );

        }

        catch (error) {

            res.status(400).json({
                message:
                    "Unable to create qualification.",
                error:
                    error.message
            });

        }

    };



export const updateQualification =
    async (req, res) => {

        try {

            const qualification =
                await Qualification.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                        runValidators: true
                    }
                );


            if (!qualification) {

                return res.status(404).json({
                    message:
                        "Qualification not found."
                });

            }


            res.status(200).json(
                qualification
            );

        }

        catch (error) {

            res.status(400).json({
                message:
                    "Unable to update qualification.",
                error:
                    error.message
            });

        }

    };



export const deleteQualification =
    async (req, res) => {

        try {

            const qualification =
                await Qualification.findByIdAndDelete(
                    req.params.id
                );


            if (!qualification) {

                return res.status(404).json({
                    message:
                        "Qualification not found."
                });

            }


            res.status(200).json({
                message:
                    "Qualification deleted successfully."
            });

        }

        catch (error) {

            res.status(400).json({
                message:
                    "Unable to delete qualification.",
                error:
                    error.message
            });

        }

    };