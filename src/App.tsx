import React from 'react';
import logo from './logo.svg';
import './App.css';
import GeneralCharSheet from "./components/GeneralCharSheet";
import MultilineTextFields from "./components/VampireCharSheet";
import VampireCharSheet from "./components/VampireCharSheet";

const App = () => {
  return (
    <div className="App">
      <body>

        <div className = 'charSheet'>
        <VampireCharSheet></VampireCharSheet>
        </div>

      </body>
    </div>
  );
}

export default App;
