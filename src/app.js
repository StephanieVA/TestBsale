import express from 'express'
import productRoutes from './routes/product.routes.js'
import categoryRoutes from './routes/category.routes.js'
// import cors from 'cors'
const cors = require('cors')


const app = express()
app.use(cors())
app.use('/api',categoryRoutes)
app.use('/api',productRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message:"endpoint not found"
    })
})

export default app;