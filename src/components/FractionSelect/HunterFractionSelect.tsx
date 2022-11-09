import * as React from "react";
import hunter from "../../resources/images/Hunter.png";


export default function HunterFractionSelect() {

    return (
        <div className="hunterFractionSelect">
            <img id ="hunter" src={hunter} />
            <h2>Охотник</h2>
        </div>
    );

}