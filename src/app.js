import express from 'express'
import productRoutes from './routes/product.routes.js'
import categoryRoutes from './routes/category.routes.js'

const app = express()

app.use('/api',categoryRoutes)
app.use('/api',productRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message:"endpoint not found"
    })
})

export default app;