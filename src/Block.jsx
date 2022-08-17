import {FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import React from 'react';


export default function Block({value, currency, onChangeValue, onChangeCurrency, rates}) {
    return (
        <>
            <FormControl className={'currencyList'}>
                <InputLabel>Currency</InputLabel>
                <Select

                    variant={'standard'}
                    value={Object.keys(rates).length !== 0 ? currency : ''}
                    onChange={(e) => onChangeCurrency(e.target.value)}
                >
                    {Object.keys(rates).map(cur => {
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

            <TextField
                label="Value"
                onChange={(e) => onChangeValue(e.target.value)}
                style={{
                    paddingRight: 10
                }}
                type="number"
                value={value}
                className={'currencyChoose'}
            />
        </>

    );
}
