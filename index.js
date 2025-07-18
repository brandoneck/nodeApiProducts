require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    
    res.send("Hello from Node API");
});


mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log("server is running on port 3000");
      });
})
.catch(()=>{
    console.log("Connection failed");
})




