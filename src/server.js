const express = require('express');

const app = express();
const productRouter = require('./routes/productRouter');
const reviewRouter =  require('./routes/reviewRouter');

app.use(express.json());

app.use('/api',productRouter)

app.use('/api',reviewRouter);

app.listen(5000,()=>{
    try {
        console.log("Server running on port 5000");
    } catch (error) {
        console.log(error);
    }
})