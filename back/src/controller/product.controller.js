const db = require('../db');

class ProductController {
  async getProducts(req, res) {
    const products = await db.query('SELECT * FROM product');
    res.json(products.rows);
  }

  async getOneProduct(req, res) {
    const { id } = req.params;
    const product = await db.query('SELECT * FROM "product" WHERE id = $1', [id]);
    res.json(product.rows[0]);
  }
}

module.exports = new ProductController();
