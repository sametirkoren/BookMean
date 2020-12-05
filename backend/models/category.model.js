var mongoose = require("mongoose");

// mongo db'de 
    //veritabanındaki tablonun   karşılığı  ->  collection
    //veritabanındaki satırların karşılığı  ->  document
var schema = mongoose.Schema;


var categorySchema = new schema({
    name : {
        type : String , 
        required : true
    },
    created : {
        type : Date,
        // kayıt olduğunda yeni bir tarih dönsün
        default:()=>{
            return new Date();
        }
    }
});

module.exports = mongoose.model("category",schema);