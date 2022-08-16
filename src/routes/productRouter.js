const express = require('express')
const {addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getProductReviews} = require('../controllers/productController');

const router = express.Router();

router.post('/addProduct',addProduct);

router.get('/allProducts',getAllProducts);

router.get('/product/:id',getProduct);

router.put('/updateProduct/:id',updateProduct)

router.delete('/deleteProduct/:id',deleteProduct)

router.get('/getProductReviews/:id',getProductReviews)

module.exports =  router;