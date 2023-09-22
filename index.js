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

// funciones
// pequeñas piezas de codigo, que hacen una sola cosa en especifico
// nombres descriptivos
// la tienes que mandar llamar pero con parentesis ()

// convencional o tradicional
// 1. con la palabra reservada function
// 2. nombre de la funcion
// 3. parentesis y las llaves

const name = 'moy6'; // global scope
// const no se reasigna
// var y let si se reasigna

function printName () {
  console.log('hola')
}

// arrow functions ES6 = estandar para escribir JS
// se llaman arrow por =>
// 1. la palabra reservada CONST o let
// 2. nombre de la funcion
// 3. = () => {}

// 1er ejemplo
// const printNames = () => {
//   console.log('hola entre llaves')
// };

// 2. ejemplo: si la logica cabe en una sola linea puedes eliminar las llaves
// const printNames = () => console.log('hola desde una sola linea');

// parametros de una funcion
// cuando solo le pasas un parametro tambien puedes eliminar los parentesis
const printNames = name => console.log(`hola ${name} desde parametros`); // hola perro desde parametros
// printNames('esteban');
// printNames('moy6');
// printNames('fora')

const printNameAndLastname = (name, lastName) => {
  console.log(`hola me llamo ${name} y mi apellido es ${lastName}`) // esto es CONCATENAR con bactick `${}`
}

printNameAndLastname('esteban', 'gutierrez');


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
