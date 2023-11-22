const express = require('express');
const router = express.Router();
const { Product, ProductDetail, ProductSubImage } = require('../database/schemas/product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러.' });
	}
});

router.get('/:id', async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findByPk(productId, {
      include: [
        { model: ProductDetail, as: 'details' },
        { model: ProductSubImage, as: 'subImages' },
      ],
    });

    if (!product) {
      return res.status(404).json({ error: '아무것도 없다' });
    }

    const productData = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category,
      details: product.details.map(detail => ({
        id: detail.id,
        title: detail.title,
        description: detail.description,
        detailType: detail.detailType,
        detailDescription: detail.detailDescription,
        detailPrice: detail.detailPrice,
      })),
      subImages: product.subImages.map(subImage => ({
        id: subImage.id,
        subImageUrl: subImage.subImageUrl,
      })),
    };

    res.json(productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러.' });
  }
});


module.exports = router;
