const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})

module.exports = app