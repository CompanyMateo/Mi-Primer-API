
const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const app = express();
const port = 47988;
// Allow all cross-origin requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

/*
------------------
Aca van los endpoints.
------------------
*/

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'));
    try{
        // algo
        } catch(e){
        res.status(500).send({'error': 'Internal server error'})
        }    
});

// Creamos dos arreglos en donde almacenaremos los mails y los ...
//usuarios.
 const usuarios = Array()
 const mails = Array()

app.post('/', (req, res) => {
    // Guardamos el usuario y el email que venian en el Json del ...

    //body en dos variables.
    const {usuario, email} = req.body;

    // Guardamos el usuario en el arreglo de usuarios.
    usuarios.push(usuario)
    mails.push(email)

    // Imprimimos los arrays para ver si se estan agregando los ...

    //elementos
    console.log(usuarios)
    console.log(mails)

    // Devolvemos un codigo de respuesta 201 indicando que el ...
    //recurso fue creado con exito junto con el usuario y el ...
    //mail que fueron recibidos.
    res.status(201).send({usuario,email})
});


app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});