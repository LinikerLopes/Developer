const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('A sennha é: SWORDFISH');
});

app.listen(, () => {
    let data = new Date();
    console.log("Servidor node iniciado em " + data);
});