const express  = require('express')
const categoryCtl = require('../controller/Controller')

const router = express.Router()

console.log("Router Running Very Fast & faster");


router.get('/', categoryCtl.home);
router.get('/product', categoryCtl.productViwe);
router.get('/category', categoryCtl.categoryViwe);
router.get('/addcat' , categoryCtl.addCategory);
router.get('/addpro', categoryCtl.addProduct);
router.post('/addcategory', categoryCtl.addCategoryForm)
router.post('/addproduct', categoryCtl.addProductForm)




module.exports = router