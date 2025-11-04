const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const db = require('./config/db')
app.set('views', path.join(__dirname, 'views'));

  
app.set('view engine', 'ejs');


app.use(express.urlencoded({extended : true}))





app.use(require('./router/router'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))