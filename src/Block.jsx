import React from 'react';



export default function Block({value, currency, onChangeValue, onChangeCurrency, rates}) {
    let defaultCurrencies = ['USD', 'GBP'];
    // console.log(rates);
    for (let key in rates) {
        console.log(key);
    }
    return (
        <>
            <ul className={'currencyList'}>
                {defaultCurrencies.map(cur => {
                    return (
                        <li
                            onClick={() => onChangeCurrency(cur)}
                            className={cur === currency ? 'active' : ''}
                            key={cur}
                        >
                            {cur}
                        </li>
                    );

                })}
            </ul>

            <input type="number" value={value} onChange={(e) => onChangeValue(e.target.value)}/>
        </>

    );
}
