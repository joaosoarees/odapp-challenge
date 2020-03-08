import React from 'react';

import './styles.css';
// função para enviar os dados do banco de dados para o corpo da página
function PacienteItem({pacientes}) {
    return (
        <li className="pacient-item">
            <header>
                <div className="pacient-info">
                    <strong>Paciente: {pacientes.nome}</strong>
                </div>
            </header>
            <p>Idade: {pacientes.idade}</p>
            <p>Cidade: {pacientes.cidade}</p>
            <p>Estado: {pacientes.estado}</p>
        </li>
    );
}

export default PacienteItem;