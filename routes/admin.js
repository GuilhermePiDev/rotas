const express = require('express');


const router = express.Router();

router.post('/add-product', (req,res) =>{

    console.log(req.body)
  
      res.send({
        created: "Ok",
        sucess:true, 
        method: "POST"
    })
  
  })

  router.get('/add-product', (req,res) =>{

    console.log(req.body)
  
      res.send({
        created: "Ok",
        sucess:true, 
        method: "GET"
    })
  
  })
  
  router.post('/delete-product', (req,res) =>{
  
     console.log(req.body)
  
      res.send({deletando: "Ok"})
  
  })

module.exports = router