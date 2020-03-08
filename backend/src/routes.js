const { Router } = require('express');
const PacienteController = require('./controllers/PacienteController');

const routes = Router();
// Métodos HTTP: get, post, put, delete
routes.get('/pacientes', PacienteController.index); // Listar
routes.post('/pacientes', PacienteController.store); // Cadastrar
routes.put('/pacientes/:id', PacienteController.update); // Atualizar
routes.delete('/pacientes/:id', PacienteController.destroy); // Deletar


module.exports = routes;