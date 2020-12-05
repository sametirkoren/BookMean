var mongoose = require("mongoose");
var category = require("./category.model");


var bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    stock : {
        type : Number,
        requier : true
    },
    created : {
        type : Date,
        default:()=>{
            return new Date()
        }
    },

    categoryBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    }

});

module.exports = mongoose.model("book",bookSchema);