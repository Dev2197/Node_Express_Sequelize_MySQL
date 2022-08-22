const express = require('express')

const {register} = require('../controllers/authController');

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id
 *         name:
 *           type: string
 *           description: User name
 *         email:
 *           type: string
 *           description: User Email
 *         password:
 *           type: string,
 *           description: password
 *       example:
 *         id: 1
 *         name: user
 *         email: user@gmail.com
 *         password: user@123
 */       

/**
  * @swagger
  * tags:
  *   name: Register
  *   description: The  User Register
  */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: register user
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: The user was registered successfully 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Register'
 *       400:
 *         description: Email already exists
 *       500:
 *         description: Some server error
 */
router.post('/register',register);



module.exports = router;