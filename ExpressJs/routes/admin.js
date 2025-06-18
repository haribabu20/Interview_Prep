const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send('<h1>Add Product</h1><form action="/store-product" method="POST"><input type="text" name="title"/><input type="submit" value="Submit"/></form>')
});

router.post('/store-product', (req,res,next)=>{
  console.log('Form data : ', req.body);
  res.send('<b>Product Submitted !!</b>')
})

module.exports = router



