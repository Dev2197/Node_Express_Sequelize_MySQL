const express = require('express')
const {addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getProductReviews} = require('../controllers/productController');

    const upload = require('../middlewares/fileuploads');
    // const authenticate  = require('../middlewares/authentication')

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - price
 *         - productimg
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
 *         title:
 *           type: string
 *           description: The product title
 *         price:
 *           type: float
 *           description: The product price
 *         productimg:
 *           type: string,
 *           description: The product image
 *       example:
 *         id: 1
 *         title: macbook
 *         price: 350000
 *         productimg: image
 */

/**
  * @swagger
  * tags:
  *   name: Products
  *   description: The products managing API
  */
 
/**
 * @swagger
 * /api/allProducts:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: false
 *         description: search products by title
 *       - in: query
 *         name: page
 *         schema:
 *           type: int
 *         required: false
 *         description: current page to view
 *       - in: query
 *         name: limit
 *         schema:
 *           type: int
 *         required: false
 *       - in: query
 *         name: sort by price
 *         schema:
 *           type: string
 *         required: false
 *         description: sort by price asc or desc
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
 

 
router.get('/allProducts',getAllProducts);

/**
 * @swagger
 * /api/addProduct:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */
router.post('/addProduct',upload.single("productimg"),addProduct);


/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product details by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: The product was not found
 */

router.get('/product/:id',getProduct);

/**
 * @swagger
 * /api/updateProduct/{id}:
 *  put:
 *    summary: Update the product by the id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: The product was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some error happened
 */

router.put('/updateProduct/:id',updateProduct)


/**
 * @swagger
 * /api/deleteProduct/{id}:
 *   delete:
 *     summary: Remove the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 * 
 *     responses:
 *       200:
 *         description: Product was deleted
 *       404:
 *         description: The product was not found
 *       500:
 *        description: Some error happened
 */
router.delete('/deleteProduct/:id',deleteProduct)


/**
 * @swagger
 * /api/getProductReviews/{id}:
 *   get:
 *     summary: Get the product reviews by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product reviews by product id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: The product was not found
 */
router.get('/getProductReviews/:id',getProductReviews)

module.exports =  router;