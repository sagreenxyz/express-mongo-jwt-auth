const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.listen(5000, () => {
    console.log('Express server running at http://localhost:5000')
})