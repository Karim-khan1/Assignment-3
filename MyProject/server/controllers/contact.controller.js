import Contact from "../models/contact.model.js";


export const getContacts = async (req, res) => {

    try {

        const contacts =
            await Contact.find();

        res.status(200).json(
            contacts
        );

    }

    catch (error) {

        res.status(500).json({
            message:
                "Unable to retrieve contacts.",
            error:
                error.message
        });

    }

};



export const getContactById = async (req, res) => {

    try {

        const contact =
            await Contact.findById(
                req.params.id
            );


        if (!contact) {

            return res.status(404).json({
                message:
                    "Contact not found."
            });

        }


        res.status(200).json(
            contact
        );

    }

    catch (error) {

        res.status(400).json({
            message:
                "Invalid contact ID.",
            error:
                error.message
        });

    }

};



export const createContact = async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            contactNumber,
            email,
            message
        } = req.body;


        if (
            !firstName ||
            !lastName ||
            !contactNumber ||
            !email ||
            !message
        ) {

            return res.status(400).json({
                message:
                    "All contact fields are required."
            });

        }


        const contact =
            await Contact.create({
                firstName,
                lastName,
                contactNumber,
                email,
                message
            });


        res.status(201).json(
            contact
        );

    }

    catch (error) {

        res.status(400).json({
            message:
                "Unable to create contact.",
            error:
                error.message
        });

    }

};



export const updateContact = async (req, res) => {

    try {

        const contact =
            await Contact.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );


        if (!contact) {

            return res.status(404).json({
                message:
                    "Contact not found."
            });

        }


        res.status(200).json(
            contact
        );

    }

    catch (error) {

        res.status(400).json({
            message:
                "Unable to update contact.",
            error:
                error.message
        });

    }

};



export const deleteContact = async (req, res) => {

    try {

        const contact =
            await Contact.findByIdAndDelete(
                req.params.id
            );


        if (!contact) {

            return res.status(404).json({
                message:
                    "Contact not found."
            });

        }


        res.status(200).json({
            message:
                "Contact deleted successfully."
        });

    }

    catch (error) {

        res.status(400).json({
            message:
                "Unable to delete contact.",
            error:
                error.message
        });

    }

};