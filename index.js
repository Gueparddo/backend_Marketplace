// const express = require('express')
// const app = express()

// const PORT = 3000;

// app.post('/perro', function (require, response) {
//   response.send('Hello World')
// })

// app.get('/', function(req,response){
//     response.send("Estamos alive")
// })

// app.listen(PORT,()=>{
//     console.log(`server running in port ${PORT} 🚀🤘🏼`)
// })

const sumTwoNumbers = (num1, num2) => {
  const result = num1 + num2;
  return result;
}

const mulResAnt = (resAnt, num3) =>{
  return resAnt * num3
  //console.log(resAnt * num3);
}

const dividedByTwo = (mulResAnt, num4) =>{
  console.log(`El resultado dividido entre dos es ${mulResAnt / num4}`);
}

const answer = sumTwoNumbers(5, 5)

const answer2 = mulResAnt(answer, 2)

dividedByTwo(answer2, 2)