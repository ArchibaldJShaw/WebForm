import React from 'react';
import './App.css';
import VampireCharSheet from "./components/VampireCharSheet";
import VampireFractionSelect from "./components/FractionSelect/VampireFractionSelect";
import HunterFractionSelect from "./components/FractionSelect/HunterFractionSelect";
import SleeperFractionSelect from "./components/FractionSelect/SleeperFractionSelect";

const App = () => {
    return (
        <div className="App">
            <div className= "fractionSelect">
                <SleeperFractionSelect />
                <VampireFractionSelect />
                <HunterFractionSelect />
            </div>

            <div className = "charSheet">
                <VampireCharSheet />
            </div>
        </div>
    );
}

export default App;
