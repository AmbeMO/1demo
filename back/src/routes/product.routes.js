const Router = require('express');

const router = new Router();
const productController = require('../controller/product.controller');

router.get('/product/:id', productController.getOneProduct);
router.get('/product', productController.getProducts);
router.get('/product?_limit=5', productController.get5Product);

module.exports = router;
