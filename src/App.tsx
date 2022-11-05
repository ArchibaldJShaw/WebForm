import React from 'react';
import './App.css';
import VampireCharSheet from "./components/VampireCharSheet";
import VampireFractionSelect from "./components/FractionSelect/VampireFractionSelect";
import HunterFractionSelect from "./components/FractionSelect/HunterFractionSelect";
import SleeperFractionSelect from "./components/FractionSelect/SleeperFractionSelect";
import SleeperCharSheet from "./components/SleeperCharSheet";
import PlayerInfo from './components/PlayerInfo';
import Accordion from './components/Accordion';


const App = () => {
    return (
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
    );
}

export default App;
