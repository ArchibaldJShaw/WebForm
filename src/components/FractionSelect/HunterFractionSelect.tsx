import * as React from "react";
import hunter from "../../resources/images/Hunter.png";
import vampire from "../../resources/images/vampire.png";


export default function HunterFractionSelect() {

    return (
        <div className="hunterFraction">
            <input type="image" src={hunter} name="saveHunter" className="hunterFractionSelect" id="hunter" />
            <h2>Охотник</h2>
        </div>
    );

}