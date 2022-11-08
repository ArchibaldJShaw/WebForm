import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ClansAutoComplete() {
    return (
        <Autocomplete
            disablePortal
            id="vampireClan"
            options={vampireClans}
            renderInput={(params) => <TextField {...params} label="Клан" />}
        />
    );
}

const vampireClans: any = ['Вентру', 'Бруха', 'Тремер', 'Тореадор', 'Цимисх', 'Малкавиан', 'Равнос', 'Гангрел', 'Ассамит', 'Носферату'];


