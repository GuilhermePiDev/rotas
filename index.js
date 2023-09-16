var express = require("express")

var app = express()

const bodyParser = require('body-parser')

 const adminRoutes = require('./routes/admin')
 const shopRoutes = require('./routes/shop.js')

app.use('/admin' , adminRoutes)
app.use('/shop', shopRoutes)
                                                                                

app.use(express.static('/views'));

app.use((req, res)=>{

    res.status(404).send({
        error:true,
        message : "Not found..."
    })

})

app.listen(3000)