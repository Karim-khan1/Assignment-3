import bcrypt from "bcrypt";

import User from "../models/user.model.js";


export const getUsers = async (req, res) => {

    try {

        const users =
            await User.find();

        res.status(200).json(
            users
        );

    }

    catch (error) {

        res.status(500).json({
            message:
                "Unable to retrieve users.",
            error:
                error.message
        });

    }

};



export const getUserById = async (req, res) => {

    try {

        const user =
            await User.findById(
                req.params.id
            );


        if (!user) {

            return res.status(404).json({
                message:
                    "User not found."
            });

        }


        res.status(200).json(
            user
        );

    }

    catch (error) {

        res.status(400).json({
            message:
                "Invalid user ID.",
            error:
                error.message
        });

    }

};



export const createUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password
        } = req.body;


        if (
            !name ||
            !email ||
            !password
        ) {

            return res.status(400).json({
                message:
                    "Name, email, and password are required."
            });

        }


        const existingUser =
            await User.findOne({
                email
            });


        if (existingUser) {

            return res.status(409).json({
                message:
                    "A user with this email already exists."
            });

        }


        const passwordHash =
            await bcrypt.hash(
                password,
                12
            );


        const user =
            await User.create({
                name,
                email,
                passwordHash
            });


        res.status(201).json({
            _id:
                user._id,

            name:
                user.name,

            email:
                user.email,

            createdAt:
                user.createdAt,

            updatedAt:
                user.updatedAt
        });

    }

    catch (error) {

        res.status(400).json({
            message:
                "Unable to create user.",
            error:
                error.message
        });

    }

};



export const updateUser = async (req, res) => {

    try {

        const updates = {
            ...req.body
        };


        if (
            updates.password
        ) {

            updates.passwordHash =
                await bcrypt.hash(
                    updates.password,
                    12
                );


            delete updates.password;

        }


        const user =
            await User.findByIdAndUpdate(
                req.params.id,
                updates,
                {
                    new: true,
                    runValidators: true
                }
            );


        if (!user) {

            return res.status(404).json({
                message:
                    "User not found."
            });

        }


        res.status(200).json(
            user
        );

    }

    catch (error) {

        res.status(400).json({
            message:
                "Unable to update user.",
            error:
                error.message
        });

    }

};



export const deleteUser = async (req, res) => {

    try {

        const user =
            await User.findByIdAndDelete(
                req.params.id
            );


        if (!user) {

            return res.status(404).json({
                message:
                    "User not found."
            });

        }


        res.status(200).json({
            message:
                "User deleted successfully."
        });

    }

    catch (error) {

        res.status(400).json({
            message:
                "Unable to delete user.",
            error:
                error.message
        });

    }

};