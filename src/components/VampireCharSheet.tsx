import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function VampireCharSheet() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div id={"charName"}>
                <TextField
                    id="charName"
                    label="Имя Персонажа"
                    multiline
                    maxRows={4}
                    defaultValue=" "
                    onChange={handleChange}

                />
            </div>

            <div id={"charAge"}>
                <TextField
                id="charAge"
                label="Возраст"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
            </div>

            <div id={"dateOfBirth"}>
                <TextField
                    id="dateOfBirth"
                    label="ДатаРождения"
                    multiline
                    maxRows={4}
                    defaultValue=" "
                    onChange={handleChange}
                />
            </div>

            <div id={"character"}>
                <TextField
                id="character"
                label="Характер*"
                multiline
                rows={4}
                defaultValue="Здесь - укажите пару слов о внутреннем мире вашего персонажа. Его склонности, страхи,
                мечты, надежды и силы, которые им движут."
            />
            </div>
            <div id={"soloNotLife"}>
                <TextField
                id="soloNotLife"
                label="Самостоятельная не-жизнь*"
                multiline
                rows={4}
                defaultValue="Опишите ваше прибытие в Лос-Сантос, планы на не-жизнь и возможные занятия,
                которым будет придаваться ваш персонаж."
            />
            </div>
            <div id={"startDiscipline"}>
                <TextField
                    id="startDiscipline"
                    label="Стартовая Дисциплина*"
                    multiline
                    rows={4}
                    defaultValue=" "
                />
            </div>
            <div id={"skills"}>
                <TextField
                    id="skills"
                    label="Навыки"
                    multiline
                    rows={4}
                    defaultValue="Может быть, ваш персонаж профессиональный взломщик, либо автомеханик, либо опытный стрелок - укажите это."
                />
            </div>
            <div id={"charBio"}>                <TextField
                id="charBio"
                label="Квента*"
                multiline
                rows={4}
                defaultValue=" "
            /></div>



        </Box>
    );
}
