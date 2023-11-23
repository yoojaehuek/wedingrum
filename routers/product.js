const express = require('express');
const router = express.Router();
const  Product = require('../database/schemas/product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러.' });
	}
});

router.get('/:productId', async (req, res) => {
  const categoryId = req.params.id;

  try {
    const products = await Product.findAll({
      where: {
        category: categoryId,
      },
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

module.exports = router;
