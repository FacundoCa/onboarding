const express = require('express');
const server = express();

server.get('/json', (req, res) => {
    const json = {
        nombre: "facu",
        apellido: "cañas"
    }

    res.json(json);
});