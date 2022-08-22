const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require("path");


const app = express();
const productRouter = require('./routes/productRouter');
const reviewRouter =  require('./routes/reviewRouter');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');

app.use(express.json());

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Product API",
			version: "1.0.0",
			description: "A simple Express Product API",
		},
		servers: [
			{
				url: "http://localhost:5000",
			},
		]
	},
	apis: [`${__dirname}/routes/*.js`],
};

  const swaggerDocs = swaggerJsdoc(options);
  console.log(swaggerDocs)
  
  app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

  
app.use('/api',productRouter)

app.use('/api',reviewRouter);

app.use("/api",registerRouter);

app.use("/api",loginRouter);

app.listen(5000,()=>{
    try {
        console.log("Server running on port 5000");
    } catch (error) {
        console.log(error);
    }
})