const express = require('express')
const app = express()

const dataroute = require('./src/data/routes')
const port = 5055

app.use(express.json())
app.use('/',dataroute)

app.listen(port, () => console.log(port))
