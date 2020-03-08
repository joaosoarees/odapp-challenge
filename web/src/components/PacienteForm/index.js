import React, { useState } from 'react';
// função para enviar os dados obtidos nos campos de formulario da web para o banco de dados
function PacienteForm({ onSubmit }){
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    
    await onSubmit({
        nome,
        idade,
        cidade,
        estado,
      });

    setNome('');
    setIdade('');
    setCidade('');
    setEstado('');
    
  };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="nome">Nome</label>
                <input
                    type ="string"
                    name="nome" 
                    id="nome" 
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)} 
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="idade">Idade</label>
                    <input 
                        type ="number" 
                        name="idade" 
                        id="idade" 
                        required
                        value={idade}
                        onChange={e => setIdade(e.target.value)}  
                    />
                </div>

                <div className="input-group">
                    <div className="input-block">
                        <label htmlFor="cidade">Cidade</label>
                        <input 
                        type="string" 
                        name="cidade" 
                        id="cidade" 
                        required 
                        value={cidade}
                        onChange={e => setCidade(e.target.value)} 
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="estado">Estado</label>
                        <input 
                        type="string" 
                        name="estado" 
                        id="estado" 
                        required 
                        value={estado}
                        onChange={e => setEstado(e.target.value)} 
                        />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    );
}

export default PacienteForm;