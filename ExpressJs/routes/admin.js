const express = require('express');
const path = require('path')

const router = express.Router();

// GET, /add-product
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

// POST, /add-product
router.post('/add-product', (req,res,next)=>{
  console.log('Form data : ', req.body);
  res.send('<b>Product Submitted !!</b>')
})

module.exports = router



