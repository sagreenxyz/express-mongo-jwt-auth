const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(5000, () => {
    console.log('Express server running at http://localhost:5000')
})
