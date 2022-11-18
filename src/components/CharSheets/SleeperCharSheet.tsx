import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ClansAutoComplete from "../ClansAutoComplete";

export default function SleeperCharSheet() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const formStyles = {
        '& .MuiTextField-root': { m: 1, width: '60ch' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    return (
        <Box
            component="form"
            sx={formStyles}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="charName"
                label="Имя Персонажа"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}

            />
            <TextField
                id="charAge"
                label="Возраст"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
            <TextField
                id="dateOfBirth"
                label="ДатаРождения"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
            <ClansAutoComplete/>
            <TextField
                id="character"
                label="Характер*"
                multiline
                rows={4}
                defaultValue="Здесь - укажите пару слов о внутреннем мире вашего персонажа. Его склонности, страхи,
                мечты, надежды и силы, которые им движут."
            />
            <TextField
                id="soloNotLife"
                label="Самостоятельная не-жизнь*"
                multiline
                rows={4}
                defaultValue="Опишите ваше прибытие в Лос-Сантос, планы на не-жизнь и возможные занятия,
                которым будет придаваться ваш персонаж."
            />
            <TextField
                id="startDiscipline"
                label="Стартовая Дисциплина*"
                multiline
                rows={4}
                defaultValue=" "
            />
            <TextField
                id="skills"
                label="Навыки"
                multiline
                rows={4}
                defaultValue="Может быть, ваш персонаж профессиональный взломщик, либо автомеханик, либо опытный стрелок - укажите это."
            />
            <TextField
                id="charBio"
                label="Квента*"
                multiline
                rows={4}
                defaultValue=" "
            />
        </Box>
    );
}
