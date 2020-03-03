import React from 'react';
import './bootstrap.min.css';
import Cabecera from './components/Cabecera';
import './App.css';
import FormulaGeneral from './components/FormulaGeneral';

function App() {
  return (
  
    <div className="container">
        <Cabecera
              titulo = 'Formula General'
        />          
        
          <FormulaGeneral />
       
    </div>
  );
}

export default App;
