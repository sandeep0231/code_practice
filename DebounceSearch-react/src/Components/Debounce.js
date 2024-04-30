import React, { useState } from "react";
const Debounce = () => {
    const [data, setData] = useState('');


    const Dsearch = (e) => {
        setData(e.target.value);
    }

    function Debounceing(Dsearch, delay = 500) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { Dsearch.apply(this, args); }, delay);
        };
    }

    const processChange = Debounceing((e) => Dsearch(e));

    // Throtling-----
const Throtlin = () =>{
    
}

    return (<>
        <h5>Debounce</h5>
        <h6>Searching js</h6>
        <input type="search" name="Dsearch" onKeyUp={(e) => { processChange(e) }} /> <br />
        <span>{data}</span>
    </>);
}
export default Debounce;