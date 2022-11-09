import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ClansAutoComplete() {

    function clanSelect() {
        switch (vampireClans.input.value) {
            case 'Вентру': {
                const vampireClanVentrue = (
                    <div id = "descriptionVentrue">
                        <h1>

                        </h1>
                    </div>

                )
                break;
            }
            case 'Бруха' : {
                const vampireClanBrujah = ( <div id = "descriptionBrujah">
                    <h1>

                    </h1>
                </div>
                )
                break;
            }
            case 'Тремер' : {
                const vampireClanTremere = (<div id = "descriptionTremere">
                    <h1>

                    </h1>
                </div>
                )
                break;
            }
            case 'Тореадор' : {
                const vampireClanToreadore = ( <div id = "descriptionToreador">
                    <h1>

                    </h1>
                </div>
                )
                break;
            }
            case 'Цимисх' : {
                const vampireClanTzimisce = ( <div id = "descriptionTzimisce">
                    <h1>

                    </h1>
                </div>
                )
                break;
            }
            case 'Малкавиан' : {
                const vampireClanMalkavian = ( <div id = "descriptionMalkavian">
                    <h1>

                    </h1>
                </div>
                )
                break;
            }
            case 'Равнос' : {
                const vampireClanRavons = ( <div id = "descriptionRavons">
                    <h1>

                    </h1>
                </div>
                )
                break;
            }
            case 'Гангрел' : {
                const vampireClanGangrel = ( <div id = "descriptionGangrel">
                    <h1>

                    </h1>
                </div>
                )
                break;
            }
            case 'Бану Хаким' : {
                const vampireClanAssamite = ( <div id = "descriptionAssamite">
                    <h1>

                    </h1>
                </div>
                )
                break;
            }
            case 'Носферату' : {
                const vampireClanNosferatu = ( <div id = "descriptionNosferatu">
                    <h1>

                    </h1>
                </div>
                )
                break;
            }
        }


    }
    return (
        <Autocomplete
            disablePortal
            id="vampireClan"
            options={vampireClans}
            renderInput={(params) => <TextField {...params} label="Клан" />}
        />


    );
}

const vampireClans: any = ['Вентру', 'Бруха', 'Тремер', 'Тореадор', 'Цимисх', 'Малкавиан', 'Равнос', 'Гангрел', 'Бану Хаким', 'Носферату'];


