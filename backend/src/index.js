const express = require('express');
const mongoose = require('mongoose');
// faz a conexão entre o frontend e o backend
const cors = require('cors');
const routes = require('./routes');

const app = express();
// conectando o o banco de dados Mongo DB
mongoose.connect('mongodb+srv://joaovitor:joao12345@cluster0-tfnqu.mongodb.net/odapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('useFindAndModify', false);
// faz a conexão entre o frontend e o backend
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);