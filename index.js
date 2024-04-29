
const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const app = express();
const port = 47522;
// Allow all cross-origin requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

/*
------------------
Aca van los endpoints.
------------------
*/

// Nuestra aplicación esta lista para recibir peticiones
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'));
    try{
        // algo
        } catch(e){
        res.status(500).send({'error': 'Internal server error'})
        }    
});
