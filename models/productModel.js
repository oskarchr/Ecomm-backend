import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: { type: String, 
    required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    images: [{ type: String }]
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema /* , collection */ )

export default Product