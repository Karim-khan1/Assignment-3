import protect from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/role.middleware.js";
import express from "express";

import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js";


const router =
    express.Router();


router.get("/", protect, adminOnly, getUsers);

router.get("/:id", protect, adminOnly, getUserById);

router.post("/", protect, adminOnly, createUser);

router.put("/:id", protect, adminOnly, updateUser);

router.delete("/:id", protect, adminOnly, deleteUser);


export default router;