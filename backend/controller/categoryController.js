const response = require("../response");

Category = require("../models/category.model");


response = reqiure("../response");


exports.list = (req,res) =>{
    // eğer ilk parametreye herhangi bir şey vermezsek tüm datayı getir diyoruz.
    // data ya gelir ya hata verir.
    Category.find({},(err,categories)=>{
        if(err)
        {
           return new response(null,err).error500(res);
        }
        return new response(data,null).success(res);
    });
}