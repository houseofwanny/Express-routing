const express = require('express')
const cors = require("cors")
const router = express.Router()


router.get("/contact", cors(), (req, res) => {
    res.render('contact', {title: 'Contact'});
})