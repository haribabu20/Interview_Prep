const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

// Correct order: first body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Then the routes
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
  res.status(404).send('<h1>404 page not found</h1>')
})

app.listen(3000);




/*
1. ✅ Import the Express framework to create and manage a web server.
2. ✅ Initialize an Express application. This app object represents your entire server.
3. ✅ Import the body-parser package (middleware that parses the body of incoming requests). It's mainly used to extract data (like form fields) from POST requests.
4. ✅ Import your route files (external modules): adminRoutes: handles routes related to "admin" part. shopRoutes: handles routes related to "shop" part.

line 8: Middleware 1,

    Apply "bodyParser" to parse any incoming form data (application/x-www-form-urlencoded) and make it available under req.body.
        { extended: false }: parse only simple key-value pairs.
    Without this line, you cannot access form data in the request.

line 11, 12: Middleware 2 and 3,

    Tell Express to use the imported routers:
    Any route starting with /add-product or /store-product will be handled by adminRoutes.
    Any route defined in shopRoutes will also be active here.

line 14: ✅ Start the server on port 3000.

*/