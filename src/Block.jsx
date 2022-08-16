import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import React from 'react';



export default function Block({value, currency, onChangeValue, onChangeCurrency, rates}) {
    let defaultCurrencies = [];
    for (let rate in rates) {
        console.log('starting loop');
        defaultCurrencies.push(rate);
    }


    return (
        <>
            <FormControl className={'currencyList'}>
                <InputLabel>Currency</InputLabel>
                <Select
                    value={currency}
                    onChange={(e) => onChangeCurrency(e.target.value)}
                >
                    {defaultCurrencies.map(cur => {
                        return (
                            <MenuItem
                                value={cur}
                                className={cur === currency ? 'active' : ''}
                                key={cur}
                            >
                                {cur}
                            </MenuItem>
                        );

                    })}
                </Select>

            </FormControl>


            <input type="number" value={value} onChange={(e) => onChangeValue(e.target.value)}/>
        </>

    );
}
