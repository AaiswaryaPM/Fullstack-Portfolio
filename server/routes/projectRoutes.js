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
 *   get:
 *     summary: Get all projects
 *     description: Returns all projects stored in MongoDB
 *     tags:
 *       - Projects
 *     responses:
 *       200:
 *         description: Successfully fetched projects
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       tech:
 *                         type: array
 *                         items:
 *                           type: string
 *                       github:
 *                         type: string
 *                       live:
 *                         type: string
 *                       image:
 *                         type: string
 *                 message:
 *                   type: string
 *                   example: Projects fetched successfully
 *       500:
 *         description: Server error
 */

router.get("/", getProjects);

router.post("/", createProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

router.patch("/:id", patchProject);

export default router;