import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import kpiRoutes from './routes/kpi.js'

// CONFIGURATION 
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
import KPI from './models/KPI.js'
import { kpis } from './data/data.js'

// ROUTES
app.use('/kpi', kpiRoutes)

// MONGOOSE SETUP 
mongoose.set('strictQuery', false)
const PORT = process.env.PORT || 9000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(async () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })

    // await mongoose.connection.db.dropDatabase()
    // await KPI.insertMany(kpis)
})
    .catch((error) => {
        console.log(error, 'did not connect')
    })