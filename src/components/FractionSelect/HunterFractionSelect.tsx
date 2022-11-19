import * as React from "react";
import hunter from "../../resources/images/Hunter.png";
import {useFractionContext} from "./FractionContext";


export default function HunterFractionSelect() {
    const {setFraction} = useFractionContext();
    const handleClick = () => {setFraction('hunter')}

    return (
        <div className="hunterFraction" onClick = {handleClick}>
            <input type="image" src={hunter} name="saveHunter" className="hunterFractionSelect" id="hunter" />
            <h2>Охотник</h2>
        </div>
    );

}