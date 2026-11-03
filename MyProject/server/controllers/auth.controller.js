import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";


const createToken = (userId) => {

    return jwt.sign(
        {
            userId
        },

        process.env.JWT_SECRET,

        {
            expiresIn:
                "1h"
        }
    );

};



export const signUp = async (req, res) => {

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


        const token =
            createToken(
                user._id.toString()
            );


        res.status(201).json({

            message:
                "User registered successfully.",

            token,

            user: {

                _id:
                    user._id,

                name:
                    user.name,

                email:
                    user.email,

                role:
                    user.role,

                createdAt:
                    user.createdAt

            }

        });

    }

    catch (error) {

        res.status(500).json({
            message:
                "Unable to register user.",
            error:
                error.message
        });

    }

};



export const signIn = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        if (
            !email ||
            !password
        ) {

            return res.status(400).json({
                message:
                    "Email and password are required."
            });

        }


        const user =
            await User.findOne({
                email
            })
            .select(
                "+passwordHash"
            );


        if (!user) {

            return res.status(401).json({
                message:
                    "Invalid email or password."
            });

        }


        const passwordMatches =
            await bcrypt.compare(
                password,
                user.passwordHash
            );


        if (!passwordMatches) {

            return res.status(401).json({
                message:
                    "Invalid email or password."
            });

        }


        const token =
            createToken(
                user._id.toString()
            );


        res.status(200).json({

            message:
                "Signed in successfully.",

            token,

            user: {

                _id:
                    user._id,

                name:
                    user.name,

                email:
                    user.email,

                role:
                    user.role

            }

        });

    }

    catch (error) {

        res.status(500).json({
            message:
                "Unable to sign in.",
            error:
                error.message
        });

    }

};



export const getProfile = async (req, res) => {

    res.status(200).json({

        message:
            "Protected route accessed successfully.",

        user: {

            _id:
                req.user._id,

            name:
                req.user.name,

            email:
                req.user.email

        }

    });

};



export const signOut = async (req, res) => {

    res.status(200).json({
        message:
            "Signed out successfully. Remove the JWT token on the client."
    });

};