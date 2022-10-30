import React from "react";
import VampireCharSheet from "./VampireCharSheet";

class VampireCharSheetSelected extends React.Component {
    state = {
        fraction: 'Sleeper'
    }
    render() {
        return VampireCharSheet();
    }
}