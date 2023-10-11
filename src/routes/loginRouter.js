const express = require('express')

const {login} = require('../controllers/authController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: User Email
 *         password:
 *           type: string,
 *           description: password
 *       example:
 *         email: user@gmail.com
 *         password: user@123
 */       

/**
  * @swagger
  * tags:
  *   name: Login
  *   description: User Login
  */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: LoggedIn successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       400:
 *          description: wrong Email or password
 *       500:
 *         description: Some server error
 */
 router.post("/login",login);

 module.exports = router;
