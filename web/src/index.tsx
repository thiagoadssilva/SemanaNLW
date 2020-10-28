import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( // Reenderizar todo o html na tag root que está no arquivo index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

