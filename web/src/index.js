// Importar React em todo arquivo JavaScript que for usar HTML
import React from 'react';
// Importar ReactDOM para se comunicar com a arvore de elementos da nossa aplicação com HTML
import ReactDOM from 'react-dom';
// Função que retorna um conteudo HTML
import App from './App';

// JSX (JavaScript + HTML)

ReactDOM.render(<App />, document.getElementById('root'));

