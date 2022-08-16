const db = require('../models');

const Review = db.reviews;

//Add review
const addReview = async(req,res)=>{
    try {
        let data = {
            product_id: req.params.id,
            description:req.body.description,
            rating:req.body.rating
        }

        const review = await Review.create(data)
        res.status(201).send(review);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

//get all reviews
const getAllReviews = async(req,res)=>{
    try {
        const reviews = await Review.findAll({});

        res.status(200).send(reviews)
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

//get one review

const getReview = async(req,res)=>{
    try {
        const review = await Review.findOne({where:{id:req.params.id}});

        res.status(200).send(review)
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

const updateReview = async(req,res)=>{
    try {
        const review = await Review.update(req.body,{where:{id:req.params.id}})
        res.status(200).send(review);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

const deleteReview = async(req,res)=>{
    try {
        await Review.destroy({where:{id:req.params.id}})

        res.status(200).send("Review Deleted")
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

module.exports = {
    addReview,
    getAllReviews,
    getReview,
    updateReview,
    deleteReview
}