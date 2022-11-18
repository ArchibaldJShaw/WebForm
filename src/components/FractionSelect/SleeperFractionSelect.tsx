import * as React from "react";
import civil from '../../resources/images/civil.jpg'
import {useFractionContext} from '../../components/FractionSelect/FractionContext';



export default function SleeperFractionSelect() {

    const {setFraction} = useFractionContext();
    const handleClick = () => {setFraction('sleeper')}
    return (
        <div className="sleeperFraction" onClick = {handleClick}>
            <input type="image" src={civil} name="saveCivil" className="sleeperFractionSelect" id="sleeper"/>
            <h2>Спящий</h2>
        </div>

    );

}