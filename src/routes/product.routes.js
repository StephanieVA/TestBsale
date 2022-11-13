import{Router} from 'express';
import {getProduct, getNameProduct, getCatProduct} from '../controllers/product.controllers.js'

const router = Router();

router.get('/product', getProduct)
router.get('/productName/:name', getNameProduct)
router.get('/productCat/:id',getCatProduct)

export default router