const express = require('express');
const app = express();
const routes = require('./src/routes');

app.use(express.json())

// todas as rotas
app.use('/api', routes);

const port = process.env.Port || 3000;
app.listen(port, ()=>{
    console.log(`app rodando em https://localhost/${port}`)
})