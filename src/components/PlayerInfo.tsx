import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ClansAutoComplete from "./ClansAutoComplete";

export default function PlayerInfo() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const formStyles = {
        '& .MuiTextField-root': { m: 1, width: '50ch' },
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
                id="playerName"
                label="Ваше Имя"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
            <TextField
                id="playerAge"
                label="Ваш Возраст"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
            <TextField
                id="playerDiscord"
                label="Ваш Discord"
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
                id="playerTwitchYouTube"
                label="Ссылка на Twitch/Youtube (по желанию)"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
            <TextField
                id="referralPlayerId"
                label="Игрок, пригласивший вас, если таковой есть"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
            <TextField
                id="playerId"
                label="Ваш ID на сервере (если его еще нет, не указывайте)"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
            <TextField
                id="playerBans"
                label="Баны и страйки на проекте"
                multiline
                maxRows={4}
                defaultValue=" "
                onChange={handleChange}
            />
        </Box>
    );
}
