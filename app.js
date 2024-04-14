import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))


import productRoutes from './routes/productRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
// import orderRoutes from './routes/orderRoutes'

app.use('/api/products', productRoutes)
app.use('/api/messages', messageRoutes)
// app.use('/api/orders', orderRoutes)


export default app