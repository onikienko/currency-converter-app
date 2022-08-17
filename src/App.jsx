import {Grid} from '@mui/material';
import React from 'react';
import Block from './Block.jsx';


export default function App() {
    const [fromCurrency, setFromCurrency] = React.useState('USD');
    const [toCurrency, setToCurrency] = React.useState('RUB');
    const [fromValue, setFromValue] = React.useState(0);
    const [toValue, setToValue] = React.useState(0);
    const [rates, setRates] = React.useState({});

    let isFirstRenderRef = React.useRef(true);
    React.useEffect(() => {
        isFirstRenderRef.current = false;
    }, []);

    React.useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then(res => res.json())
            .then(json => {
                setRates(json.rates);
            })
            .catch(err => console.log(err));
    }, []);


    function onChangeFromCurrency(cur) {
        setFromCurrency(cur);
    }

    function onChangeToCurrency(cur) {
        setToCurrency(cur);
    }

    function onChangeFromValue(value) {
        const price = value / rates[fromCurrency];
        const result = price * rates[toCurrency];
        setFromValue(value);
        setToValue(result);
    }

    function onChangeToValue(value) {
        const price = value / rates[toCurrency];
        const result = price * rates[fromCurrency];
        setFromValue(result);
        setToValue(value);
    }

    return (
        <>
            <Block value={fromValue} currency={fromCurrency} onChangeCurrency={onChangeFromCurrency}
                   onChangeValue={onChangeFromValue} rates={rates}/>

            <Block value={toValue} currency={toCurrency} onChangeCurrency={onChangeToCurrency}
                   onChangeValue={onChangeToValue} rates={rates}/>
        </>
    );

}