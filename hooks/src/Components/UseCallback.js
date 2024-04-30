import React,{useCallback, useState} from "react";
import UseCallbackChild from "./useCallbackChild";

const UseCallbackHook = ()=>{
const [num,setnum] = useState(0);
const [num1,setnum1] = useState(0);

console.log("usecallback parent...",num);

function testFun(){
    setnum(num+1);
    // setnum1(num1+1);
}
const fun = useCallback(()=>{
console.log("fun call ");
},[num1]);

    return(
        <>
        <h3>UseCallback hook</h3>
        <UseCallbackChild  prop={num1} fun ={fun()} />

        <button name= "btn"  onClick={()=>testFun() }>Click me!</button> 
        </>
    );
}
export default UseCallbackHook;