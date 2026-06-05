import express from "express";

import { sendMessage } from "../controllers/contactController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           example: Aaiswarya PM
 *         email:
 *           type: string
 *           example: test@gmail.com
 *         message:
 *           type: string
 *           example: I would like to discuss a project.
 */

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit contact form
 *     tags:
 *       - Contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: Message sent successfully
 *       400:
 *         description: Validation failed
 *       429:
 *         description: Too many requests
 *       500:
 *         description: Server error
 */

// POST Contact Form
router.post("/", sendMessage);

export default router;