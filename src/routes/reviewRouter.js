const express = require('express');
const {addReview,
    getAllReviews,
    getReview,
    updateReview,
    deleteReview} = require('../controllers/reviewController');

const router = express.Router();

router.post('/addReview/:id',addReview);

router.get('/allReviews',getAllReviews);

router.get('/review/:id',getReview);

router.put('/updateReview/:id',updateReview);

router.delete('/deleteReview/:id',deleteReview);

module.exports = router;