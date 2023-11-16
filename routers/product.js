// const express = require('express');
// const router = express.Router();
// const { Product, ProductDetail, ProductSubImage } = require('./models');

// router.get('/', async (req, res) => {
//   try {
//     const products = await Product.findAll();
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// router.get('/:id', async (req, res) => {
//   const productId = req.params.id;
//   try {
//     const product = await Product.findByPk(productId, {
//       include: [
//         { model: ProductDetail, as: 'details' },
//         { model: ProductSubImage, as: 'subImages' },
//       ],
//     });
//     if (!product) {
//       return res.status(404).json({ error: '아무것도 없다' });
//     }
//     res.json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: '서버 에러.' });
//   }
// });

// module.exports = router;
