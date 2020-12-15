// const { productSearch} = require ("./product.controller");
// const { productFetch} = require ("./product.controller");
// const router2 = require ("express").Router();

// router2.post("/productSearch", productSearch);
// router2.get("/productFetch", productFetch);
// ///:product_label

// module.exports = router2; 
const { productSearch, insertProduct , productFetch, editProduct,reviewFetch} = require ("./product.controller");

const router2 = require ("express").Router();

router2.post("/productSearch", productSearch);
router2.post("/insertProduct",insertProduct);
router2.get("/productFetch" , productFetch);
router2.post("/editProduct", editProduct);
router2.post("/reviewFetch", reviewFetch);
module.exports = router2;