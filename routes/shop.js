
const express = require('express');

const path  = require ('path')

const router = express.Router();



router.get('/product',  (req, res) =>{

    console.log(req.body)
    
    res.sendFile(path.join(__dirname ,'../', 'views', 'index.html'))

})

router.get('/brands', (req,res) =>{

   console.log(req.body)

    res.send({brands: "Ok"})

})

module.exports = router