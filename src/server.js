const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

// req.query = acessar query params=(parâmetros) (para filtros)
// req.params = acessaar route params (para medição, delete)
app.use(express.json());
app.use(routes);
mongoose.connect('mongodb+srv://junio:12345@juniodev.cktil.mongodb.net/juniodev?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen(3333);