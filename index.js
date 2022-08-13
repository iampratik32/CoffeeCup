const express = require('express')
const app = express()
const cluster = require('cluster')
const os = require('os')
require('dotenv').config({ encoding: 'latin1' })
const port = process.env.APP_PORT
const db = require('./src/config/db')
const path = require('path')
const apiRoutes = require('./src/routes/api')()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const user = require('./src/models/StoreCoffee')

app.use(
    helmet({
        crossOriginResourcePolicy: { policy: 'same-site' }
    })
)
app.use(cors())
app.use(express.urlencoded({ limit: '5mb', extended: true }))
app.use(express.json({ limit: '5mb' }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, './src/public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use('/api', apiRoutes)

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        cluster.fork()
    })
}
else app.listen(port, () => console.log(`Server - ${process.pid} http://localhost:${port}`))