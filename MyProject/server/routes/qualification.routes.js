import protect from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/role.middleware.js";
import express from "express";

import {
    getQualifications,
    getQualificationById,
    createQualification,
    updateQualification,
    deleteQualification
} from "../controllers/qualification.controller.js";


const router =
    express.Router();


router.get(
    "/",
    protect, getQualifications
);


router.get(
    "/:id",
    protect, getQualificationById
);


router.post(
    "/",
    protect, adminOnly, createQualification
);


router.put(
    "/:id",
    protect, adminOnly, updateQualification
);


router.delete(
    "/:id",
    protect, adminOnly, deleteQualification
);


export default router;