const axios = require('axios');
const Paciente = require('../models/Paciente');


module.exports = {
    // Atualizar Pacientes
    async update(request, response) {
        const { id } = request.params;
        let { nome, idade, cidade, estado, dataUpdate} = request.body;

        dataUpdate = {nome, idade, cidade, estado};

        const updatePaciente = await Paciente.findByIdAndUpdate(id, dataUpdate, { new: true });
        console.log("Usuário Atualizado");

        return response.json(updatePaciente);
    },
    // Deletar Pacientes
    async destroy(request, response) {
        const { id } = request.params;

        await Paciente.findByIdAndDelete(id);

        console.log("Usuário Deletado")
        return response.json({ message: "Usuário Deletado" });
    },

    // Listar Pacientes
    async index(request, response) {
        const pacientes = await Paciente.find();

        return response.json(pacientes);
    },
    // Cadastrar Pacientes
    async store(request, response) {
        const { nome, idade, dataCadastro, cidade, estado } = request.body;
        
        let createPaciente = await Paciente.find();

        createPaciente = await Paciente.create({
            nome,
            idade,
            dataCadastro,
            cidade,
            estado,
        });
        console.log("Usuário Cadastrado");

        return response.json(createPaciente);
    },
};