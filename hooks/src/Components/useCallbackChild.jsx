import React,{memo}from "react";

const UseCallbackChild= ()=>{
console.log("Callback child...");
    return(
        <>
        <h3>UseCallback child</h3>

        </>
    );
}

export default memo(UseCallbackChild);