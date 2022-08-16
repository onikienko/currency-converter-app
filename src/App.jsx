import React from 'react';
import Block from './Block.jsx';

export default function App() {
    const [fromCurrency, setFromCurrency] = React.useState('USD');
    const [toCurrency, setToCurrency] = React.useState('GBP');
    const [fromValue, setFromValue] = React.useState(0);
    const [toValue, setToValue] = React.useState(0);
    const ratesRef = React.useRef();
    React.useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then(res => res.json())
            .then(json => {
                ratesRef.current = json.rates;
            })
            .catch(err => console.log(err))
    }, []);
    console.log(ratesRef);
    /*console.log('fromValue', fromValue);
    console.log('toValue', toValue);*/
    function onChangeFromCurrency(cur) {
        setFromCurrency(cur)
    }
    function onChangeToCurrency(cur) {
        setToCurrency(cur)
    }
    function onChangeFromValue(value) {
        const price = fromValue / ratesRef.current[fromCurrency];
        const result = price * ratesRef.current[toCurrency];
        setFromValue(value);
        setToValue(result)
    }
    function onChangeToValue(value) {
        const price = toValue / ratesRef.current[toCurrency];
        const result = price * ratesRef.current[fromCurrency];
        setFromValue(result);
        setToValue(value)
    }
    return (
        <>
            <Block value={fromValue} currency={fromCurrency} onChangeCurrency={onChangeFromCurrency} onChangeValue={onChangeFromValue} rates={ratesRef.current}/>
            <Block value={toValue} currency={toCurrency} onChangeCurrency={onChangeToCurrency} onChangeValue={onChangeToValue} rates={ratesRef.current}/>
        </>
    );

}