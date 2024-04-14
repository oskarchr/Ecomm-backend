import mongoose from 'mongoose'
import Product from '../models/productModel.js'

const createProduct = async (req, res) => {
    try {
        const { name, price, description, category, images } = req.body
        const createProduct = await Product.create({ name, price, description, category, images })
        res.status(201).json(createProduct)
    } catch (error) {
        res.status(500).json({ message: 'Failed to create product.' })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({})
        res.json(allProducts)
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch Product.' })
    }
}

const getProductById = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ObjectId.' })
        }
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' })
        }
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch product.' })
    }
}

const updateProductById = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ObjectId.' })
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found.' })
        }
        res.json(updatedProduct)
    } catch (error) {
        res.status(500).json({ message: 'Failed to update product.' })
    }
}

const deleteProductById = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ObjectId.' })
        }
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found.' })
        }
        res.json(deletedProduct)
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete product.' })
    }
}

export { 
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
}