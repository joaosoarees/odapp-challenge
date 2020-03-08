const mongoose = require('mongoose');
// Formulário de cadastro de pacientes
const PacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Paciente', PacienteSchema);