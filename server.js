const express = require('express');
const server = express();

server.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

server.get('/json', (req, res) => {
    const json = {
        nombre: "facu",
        apellido: "cañas"
    }

    res.json(json);
});