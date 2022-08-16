
import React from 'react';
import Block from './Block.jsx';
import {Button} from '@mui/material';

export default function App() {
    const [fromCurrency, setFromCurrency] = React.useState('USD');
    const [toCurrency, setToCurrency] = React.useState('GBP');
    const [fromValue, setFromValue] = React.useState(0);
    const [toValue, setToValue] = React.useState(0);
    const [rates, setRates] = React.useState({})

    let isFirstRenderRef = React.useRef(true);
    React.useEffect(() => {
        isFirstRenderRef.current = false;
    }, [])

    React.useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then(res => res.json())
            .then(json => {
                setRates(json.rates)
            })
            .catch(err => console.log(err))
    }, []);





    function onChangeFromCurrency(cur) {
        setFromCurrency(cur)
    }
    function onChangeToCurrency(cur) {
        setToCurrency(cur)
    }
    function onChangeFromValue(value) {
        const price = fromValue / rates.current[fromCurrency];
        const result = price * rates.current[toCurrency];
        setFromValue(value);
        setToValue(result)
    }
    function onChangeToValue(value) {
        const price = toValue / rates.current[toCurrency];
        const result = price * rates.current[fromCurrency];
        setFromValue(result);
        setToValue(value)
    }
    return (
        <>
            <Block value={fromValue} currency={fromCurrency} onChangeCurrency={onChangeFromCurrency} onChangeValue={onChangeFromValue} rates={rates}/>
            <Block value={toValue} currency={toCurrency} onChangeCurrency={onChangeToCurrency} onChangeValue={onChangeToValue} rates={rates}/>
            <Button variant={'outlined'}>Change suzuki</Button>
        </>
    );

}