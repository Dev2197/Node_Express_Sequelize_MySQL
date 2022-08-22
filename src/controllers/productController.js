const db = require('../models');

const Product = db.products;
const Review = db.reviews;

//create Product
const addProduct = async(req,res)=>{
    try {
        const product = await Product.create({
            title:req.body.title,
            price:req.body.price
        })
    
        res.status(201).send(product);

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

//get all products
const getAllProducts = async(req,res)=>{
    try {
        const products = await Product.findAll({});

        res.status(200).send(products)
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

//get one Prodct

const getProduct = async(req,res)=>{
    try {
        const product = await Product.findOne({where:{id:req.params.id}});

        res.status(200).send(product)
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

//Update Product
const updateProduct = async(req,res)=>{
    try {
        const product = await Product.update(req.body,{where:{id:req.params.id}})
        res.status(200).send(product);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

//Delete Product
const deleteProduct = async(req,res)=>{
    try {
        const product = await Product.findOne({where:{id:req.params.id}})

        if(!product)
        {
            return res.status(500).send("Product not found");
        }
        await Product.destroy({where:{id:req.params.id}})

        res.status(200).send("Product Deleted")
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

//connect one to many relation product and reviews

const getProductReviews = async(req,res)=>{
    try {

        const data = await Product.findOne({
            include: [{
                model: Review,
                as: 'review'
            }],
            where: { id: req.params.id }
        })

        res.status(200).send(data);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    }
}

module.exports ={
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getProductReviews
}