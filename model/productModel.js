const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
     product_name : {
        type : String,
        required : true
    },
     product_price : {
        type : Number,
        required : true
    },
    category_name : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category",
    }
})



const product = mongoose.model("product" , productSchema);

module.exports = product;