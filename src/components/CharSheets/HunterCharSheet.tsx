import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function HunterCharSheet() {
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
                id="dateOfBirth"
                label="Дата Рождения"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
            <TextField
                id="job"
                label="Профессия*"
                multiline
                rows={4}
                defaultValue=" "
            />
            <TextField
                id="group"
                label="Принадлежность к группировке*"
                multiline
                rows={4}
                defaultValue=" "
            />
            <TextField
                id="background"
                label="Происхождение*"
                multiline
                rows={4}
                defaultValue=" "
            />
            <TextField
                id="childhood"
                label="Детство*"
                multiline
                rows={4}
                defaultValue=" "
            />
            <TextField
                id="Parenthood"
                label="Отношения с родителями*"
                multiline
                rows={4}
                defaultValue=" "
            />
            <TextField
                id="Environment"
                label="Отношения с окружающим миром*"
                multiline
                rows={4}
                defaultValue=" "
            />
            <TextField
                id="Education"
                label="Образование"
                multiline
                rows={4}
                defaultValue=" "
            />
            <TextField
                id="adulthood"
                label="Взрослая жизнь*"
                multiline
                rows={4}
                defaultValue="Опишите ваше прибытие в Лос-Сантос, планы на жизнь и возможные занятия,
                которым будет придаваться ваш персонаж."
            />
            <TextField
                id="awakening"
                label="Встреча с паранормальным"
                multiline
                rows={4}
                defaultValue=" "
            />
            <TextField
                id="Education"
                label="Вступление в ряды Проета Рассвет"
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
                id="character"
                label="Характер*"
                multiline
                rows={4}
                defaultValue="Здесь - укажите пару слов о внутреннем мире вашего персонажа. Его склонности, страхи,
                мечты, надежды и силы, которые им движут."
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
