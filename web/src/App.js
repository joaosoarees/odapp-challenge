import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import PacienteItem from './components/PacienteItem';
import PacienteForm from './components/PacienteForm';

// Conceitos Principais do React
// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicação
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
// Propriedade: Informações que um componente PAI passa para o componente FILHO
function App() {
  const [pacientes, setPacientes] = useState([]); 
  // função para carregar pacientes registrados na página
  useEffect(() => {
    async function loadPacientes() {
      const response = await api.get('/pacientes');

      setPacientes(response.data);
    }
    
    loadPacientes();
  }, []);

  async function handleAddPaciente(data) {
    const response = await api.post('/pacientes', data)

    
    setPacientes([...pacientes, response.data]);
  }
// Corpo da página
  return (
    <div id="App">
      <header>
        <img src="https://i.imgur.com/avmOQvh.png" alt="ODAPP Challenge"/>
      </header>
      <aside>
        <strong>Cadastrar</strong>
        <PacienteForm onSubmit={handleAddPaciente}/>
      </aside>
      <main>
        <ul>
          {pacientes.map(pacientes => (
            <PacienteItem key={pacientes._id} pacientes={pacientes} />
          ))}
        </ul>
      </main>
      <footer>2020</footer>
    </div>
  );
}

export default App;

