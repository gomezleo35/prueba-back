const express = require('express');
const app = express();

// Habilitar express.json es similar a bodyparser
app.use(express.json({extend: true}));

const PORT = process.env.PORT || 4000;


app.get('/ping', (req, res) => {
    res.send('leonardo')
});

app.listen( PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}, navegá hacia: http://localhost:${PORT}/ping`);
});

