import * as React from "react";
import vampire from "../../resources/images/vampire.png";
import civil from "../../resources/images/civil.jpg";


export default function VampireFractionSelect() {

    return (
        <div className="vampireFraction">
            <input type="image" src={vampire} name="saveVampire" className="vampireFractionSelect" id="vampire" />
            <h2>Вампир</h2>
        </div>
    );

}
