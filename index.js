const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

var employeesRouter = require('./routes/user.router')

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('layouts/main', {
        name: 'Phú Cường'
    });// đường dẫn tính từ thư mục views
})

app.use('/employees', employeesRouter)

app.listen(3000, () => {
    console.log('Express server is running...')
})

