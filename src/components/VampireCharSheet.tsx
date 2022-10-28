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
                    defaultValue=''
                    onChange={handleChange}

                />
            </div>

            <div id={"charAge"}>
                <TextField
                id="charAge"
                label="Возраст"
                multiline
                maxRows={4}
                defaultValue=''
                onChange={handleChange}
            />
            </div>

            <div id={"dateOfBirth"}>
                <TextField
                    id="dateOfBirth"
                    label="ДатаРождения"
                    multiline
                    maxRows={4}
                    defaultValue=''
                    onChange={handleChange}
                />
            </div>

            <div id={"character"}>
                <TextField
                id="character"
                label="Характер (пару слов о внутреннем мире)*"
                multiline
                rows={4}
                defaultValue=""
            />
            </div>
            <div id={"soloNotLife"}>
                <TextField
                id="soloNotLife"
                label="Самостоятельная не-жизнь (прибытие в Лос-Сантос, планы на не-жизнь)*"
                multiline
                rows={4}
                defaultValue=""
            />
            </div>
            <div id={"startDiscipline"}>
                <TextField
                    id="startDiscipline"
                    label="Стартовая Дисциплина*"
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </div>
            <div id={"skills"}>
                <TextField
                    id="skills"
                    label="Навыки (Может быть, ваш персонаж профессиональный взломщик, либо автомеханик, либо опытный стрелок - укажите это)"
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </div>
            <div id={"charBio"}>                <TextField
                id="charBio"
                label="Квента*"
                multiline
                rows={4}
                defaultValue=""
            /></div>



        </Box>
    );
}
