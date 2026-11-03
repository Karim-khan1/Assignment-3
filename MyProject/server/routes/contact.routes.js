import protect from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/role.middleware.js";
import express from "express";

import {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} from "../controllers/contact.controller.js";


const router =
    express.Router();


router.get(
    "/",
    protect, adminOnly, getContacts
);


router.get(
    "/:id",
    protect, adminOnly, getContactById
);


router.post(
    "/",
    createContact
);


router.put(
    "/:id",
    protect, adminOnly, updateContact
);


router.delete(
    "/:id",
    protect, adminOnly, deleteContact
);


export default router;