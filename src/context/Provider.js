import React, { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
    const [data, setData] = useState({
        outros: [
            { title: 'Palavras', q: '', p: 100, save:[] },
            { title: 'Frases', q: '' , p: 100, save:[]},
            { title: 'Vogais', q: '' , p: 100, save:[]},
            { title: 'Caracteres especiais', q: '' , p: 100, save:[]},
            { title: '<tags>', q: '' , p: 100, save:[]},
            { title: 'Caracteres', q: '' , p: 100, save:[]},
            { title: 'Espaços em branco', q: '' , p: 100, save:[]},
        ]
    });

    const [configs, setconfigs] = useState({ limitCaract: 1000 });
    const [tempInput, setTempInput] = useState('');
    const [temp, setTemp] = useState('');
    const [errors, setErrors] = useState({ status: false, msg: '' });

    const value = {
        data,
        temp,
        setTemp,
        setData,
        tempInput,
        setTempInput,
        errors,
        setErrors,
        configs,
        setconfigs,
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );

}

export default Provider;
