import React from 'react';
import './App.css';
import VampireFractionSelect from "./components/FractionSelect/VampireFractionSelect";
import HunterFractionSelect from "./components/FractionSelect/HunterFractionSelect";
import SleeperFractionSelect from "./components/FractionSelect/SleeperFractionSelect";
import Accordion from './components/Accordion';
import FractionContext from './components/FractionSelect/FractionContext';

const App = () => {
    return (
        <FractionContext>
        <div className="App">
            <div className="fractionSelect">
                <SleeperFractionSelect />
                <VampireFractionSelect />
                <HunterFractionSelect />
            </div>
            <div className="information">
            <Accordion />
            </div>
        </div>
            </FractionContext>
    )
}

export default App;
