import express from 'express'
import Product from '../models/Product.js';

const router = express.Router()

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.send(404).json({ message: error.message })
        console.log(error)
    }
})

export default router
