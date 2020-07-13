const {Router} = require('express');
const router = Router();
const {getSearch} = require('../controllers/search.controller');
const {getProduct} = require('../controllers/product.controller');

//Seteamos las rutas de los endpoints

router.route('/?q=:query')
    .get(getSearch)


router.route('/:id')
    .get(getProduct)



module.exports = router;