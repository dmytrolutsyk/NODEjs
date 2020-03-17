const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.send('Hello World!')
})
app.get('/hello', function (req, res) {
    const name = req.query.nom
    if(name) {
        res.send("Bonjour, " + name+"!")
    }else {
        res.send("Quel est votre nom ?")
    }
})
app.listen(PORT, function () {   
    console.log('Example app listening on port'+PORT)
})
