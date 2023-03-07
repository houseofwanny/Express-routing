const express = require('express')
const responseTime = require('response-time')
const app = express()
const port = 3000
const cors = require("cors")
const contactRoutes = require('./routes/contactRoutes')


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(express.static('public'))
app.use(responseTime((req, res, time) => {
    console.log(`${req.method} ${req.url} ${time}`)
}))
// app.use((req, res, next) => { req.sta = Date.now(); next(); });
app.use((req, res, next) => {
    console.log('host:', req.hostname)
   next()
})






app.get('/', cors(),  (req, res) => {
    res.render('home', {title: 'Home'});
})



app.get("/services", cors(),  (req, res) => {
    res.render('services' , {title: 'Services'});
})

app.use(contactRoutes)

app.use((req, res) => {
    res.status(404).render('404' , {title: 'Error'})
})

// app.use((req, res) => {
//     let time = Date.now() - req.start;
//     console.log(time);
// });



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})