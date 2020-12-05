let router = require("express").Router();
let categoryController = require("./controller/categoryController");
let bookController = require("./controller/bookController");

//http://localhost/api/category 
router.route("/category").get(categoryController.list).post(categoryController.create);
router.route("/category/:category_id").put(categoryController.update).delete(categoryController.delete);
router.route("/category/:category_id").get(categoryController.getById);


router.route("/book").get(bookController.list);
router.route("/book/:book_id").get(bookController.getById);

module.exports=router;