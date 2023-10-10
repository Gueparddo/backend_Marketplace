const express = require('express') // requiriendo o importando express
const app = express() // instancia de express

// esto es configuracion extra para leer json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

// todo lo que esta despues del dominio de la pagina se llama
// query params
// https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEStccABwFbxLmyPMvPfmMorb5ot2zaeApQ&keywords=moises%20mu%C3%B1oz&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=caa96fbb-d1e1-4fc0-b8e7-ec5b18272887&sid=.Zj&spellCorrectionEnabled=true

app.post('/createUser/:name/:lastName/:age/:favouriteColor/', (request, response) => {
  // const name = request.params.name;
  // const lastName = request.params.lastName;
  // const age = request.params.age;
  // const favouriteColor = request.params.favouriteColor
  const {name, lastName, age, favouriteColor} = request.params; // => destructuramos
  const { password } = request.body

  // solo cuando el "value" es una variable la puedes utilizar como "key"
  response.status(200).json({
    // todo lo demas viene del params
    name,
    lastName,
    age,
    favouriteColor,
    password, // esta info viene del body
    meCaeMal: true // harcodear respuesta
  })
  // JSON => JavaScript Object Notation === {}
})

app.get('/', (request,response) => {
    response.send("metodo get")
});

app.put('/', (request,response) => {
  response.send("metodo put")
});

app.delete('/', (request,response) => {
  response.send("metodo delete")
})

// levantamos el server
app.listen(PORT,()=>{
    console.log(`server running in port ${PORT} 🚀🤘🏼`)
})


