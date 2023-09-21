const express = require('express')
const app = express()

const PORT = 3000;

app.post('/perro', function (require, response) {
  response.send('Hello World')
})

app.get('/', function(req,response){
    response.send("Estamos alive")
})

app.listen(PORT,()=>{
    console.log(`server running in port ${PORT} 🚀🤘🏼`)
})