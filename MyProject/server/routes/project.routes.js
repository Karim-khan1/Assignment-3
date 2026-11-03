import protect from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/role.middleware.js";
import express from "express";

import {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
} from "../controllers/project.controller.js";


const router =
    express.Router();


router.get("/", protect, getProjects);

router.get("/:id", protect, getProjectById);

router.post("/", protect, adminOnly, createProject);

router.put("/:id", protect, adminOnly, updateProject);

router.delete("/:id", protect, adminOnly, deleteProject);


export default router;