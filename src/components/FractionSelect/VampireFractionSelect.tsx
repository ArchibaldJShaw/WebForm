import * as React from "react";
import vampire from "../../resources/images/vampire.png";
import {useFractionContext} from "./FractionContext";


export default function VampireFractionSelect() {
    const {setFraction} = useFractionContext();
    const handleClick = () => {setFraction('vampire')}

    return (
        <div className="vampireFraction" onClick = {handleClick}>
            <input type="image" src={vampire} name="saveVampire" className="vampireFractionSelect" id="vampire" />
            <h2>Вампир</h2>
        </div>

    );

}
