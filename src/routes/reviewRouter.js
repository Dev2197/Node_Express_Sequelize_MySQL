const express = require('express');
const {addReview,
    getAllReviews,
    getReview,
    updateReview,
    deleteReview} = require('../controllers/reviewController');

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - description
 *         - rating
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id
 *         description:
 *           type: string
 *           description: write a review
 *         rating:
 *           type: float
 *           description: product rating
 *       example:
 *         id: 1
 *         description: Good product
 *         rating: 4.5
 */

/**
  * @swagger
  * tags:
  *   name: Reviews
  *   description: The reviews managing API
  */

/**
 * @swagger
 * /api/addReview/{id}:
 *   post:
 *     summary: add a review to the product.
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: The review added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */
router.post('/addReview/:id',addReview);

router.get('/allReviews',getAllReviews);

router.get('/review/:id',getReview);

/**
 * @swagger
 * /api/updateReview/{id}:
 *  put:
 *    summary: Update the review by the id
 *    tags: [Reviews]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The review id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Review'
 *    responses:
 *      200:
 *        description: The review was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Review'
 *      404:
 *        description: The review was not found
 *      500:
 *        description: Some error happened
 */
router.put('/updateReview/:id',updateReview);

/**
 * @swagger
 * /api/deleteReview/{id}:
 *   delete:
 *     summary: delete review by id
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The review id
 * 
 *     responses:
 *       200:
 *         description: review was deleted
 *       404:
 *         description: The review was not found
 *       500:
 *        description: Some error happened
 */
router.delete('/deleteReview/:id',deleteReview);

module.exports = router;