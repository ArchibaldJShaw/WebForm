import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VampireCharSheet from "./CharSheets/VampireCharSheet";
import SleeperCharSheet from "./CharSheets/SleeperCharSheet"
import PlayerInfo from './PlayerInfo';
import {useFractionContext} from "./FractionSelect/FractionContext";
import HunterCharSheet from "./CharSheets/HunterCharSheet";

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const {fraction} = useFractionContext();

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion expanded={expanded === 'PlayerInfoPanel'} onChange={handleChange('PlayerInfoPanel')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="PlayerInfoPanel-content"
                    id="PlayerInfoPanel-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Карточка игрока
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className = "PlayerInfo">
                            { fraction === null && (null) }
                            { fraction === "sleeper" && (<PlayerInfo/>)}
                            { fraction === "vampire" && (<PlayerInfo/>)}
                            { fraction === "hunter"  && (<PlayerInfo/>)}

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'charSheetPanel'} onChange={handleChange('charSheetPanel')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="charSheetPanel-content"
                    id="charSheetPanel-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Карточка персонажа</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className = "charSheet">
                            { fraction === null && (null) }
                            { fraction === "sleeper" && (<SleeperCharSheet/>) }
                            { fraction === "vampire" && (<VampireCharSheet/>) }
                            { fraction === "hunter" && (<HunterCharSheet/>) }
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>

    );
}
