import React, { useState,useMemo} from 'react';
function UseMemo() {
    const [countone, setcountone] = useState(0);
    const [counttwo, setcounttwo] = useState(0);
    const IncremenOne =()=>{
        setcountone(countone+1);
    }
    const IncrementTwo = ()=>{
        setcounttwo(counttwo+1);
    }
    const isEven = useMemo(()=>{
        let i=0;
    while(i<2000000000)i++
        return countone % 2 ===0;
    },[countone]);
// const isEven = ()=>{
//     let i=0;
//     while(i<2000000000)i++
//         return countone % 2 ===0;
// }
    return(<>
    <button onClick={IncremenOne}>+ countFirst-- {countone}</button>
    <span>{isEven ? 'even' : 'odd'}</span>
    <button onClick={IncrementTwo}>+ countSecound-- {counttwo}</button>
    </>);
  }
  export default UseMemo;