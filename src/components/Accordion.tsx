import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VampireCharSheet from "./VampireCharSheet";
import PlayerInfo from './PlayerInfo';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Карточка игрока
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Укажите здесь информацию о себе.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className = "PlayerInfo">
                        <PlayerInfo/>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Карточка персонажа</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                       Укажите здесь информацию о своем персонаже.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className = "charSheet">
                        <VampireCharSheet />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
