import express from "express";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  patchProject,
} from "../controllers/projectController.js";

const router = express.Router();

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Create a new project
 *     description: Adds a new project to the portfolio database
 *     tags:
 *       - Projects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - tech
 *               - github
 *               - live
 *               - image
 *             properties:
 *               title:
 *                 type: string
 *                 example: Portfolio Website
 *               description:
 *                 type: string
 *                 example: A full stack portfolio built using MERN stack
 *               tech:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["React", "Node.js", "MongoDB"]
 *               github:
 *                 type: string
 *                 example: https://github.com/username/project
 *               live:
 *                 type: string
 *                 example: https://project.vercel.app
 *               image:
 *                 type: string
 *                 example: https://res.cloudinary.com/demo/image.png
 *     responses:
 *       201:
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                   example: Project created successfully
 *       400:
 *         description: Validation Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Missing required fields
 *       500:
 *         description: Server Error
 */

router.get("/", getProjects);

router.post("/", createProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

router.patch("/:id", patchProject);

export default router;