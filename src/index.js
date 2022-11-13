import app from './app.js'
import {PORT} from './config.js'
// const cors = require('cors')
import cors from 'cors'

app.use(cors())

app.listen(PORT)
console.log('Server running on port '+ PORT)
