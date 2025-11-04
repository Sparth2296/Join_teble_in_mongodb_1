const Category = require("../model/categoryModel");
const Product = require("../model/productModel");

module.exports.home = async (req, res) => {
  const products = await Product.find();
  const categories = await Category.find();
  return res.render("home", { products, categories });
};
module.exports.productViwe = async (req, res) => {
  const products = await Product.find();
  return res.render("viweproduct", { products });
};

module.exports.categoryViwe = async (req, res) => {
  const categories = await Category.find();

  return res.render("viwecategoet", { categories });
};
module.exports.addCategory = (req, res) => {
  return res.render("addCategory");
};
module.exports.addProduct = (req, res) => {
  return res.render("addProduct");
};
module.exports.addCategoryForm = async (req, res) => {
  console.log(req.body);

  const category = await Category.create(req.body);

  return res.redirect("/category");
};
module.exports.addProductForm = async (req, res) => {
  console.log(req.body);

  const product = await Product.create(req.body);

  return res.redirect("/product");
};
