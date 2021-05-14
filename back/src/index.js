const express = require('express')

const userRouter = require('./routes/user.routes')
const productRouter = require('./routes/product.routes')
const supplierRouter = require('./routes/supplier.routes')


const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', productRouter)
app.use('/api', supplierRouter)




app.listen(PORT, () => console.log(`server started on post ${PORT}`))