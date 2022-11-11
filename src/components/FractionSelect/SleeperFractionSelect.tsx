import * as React from "react";
import civil from '../../resources/images/civil.jpg'



export default function SleeperFractionSelect() {

    return (
        <div className="sleeperFraction">
            <input type="image" src={civil} name="saveCivil" className="sleeperFractionSelect" id="sleeper"/>
            <h2>Спящий</h2>
        </div>
    );

}