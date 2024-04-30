import React, { useContext } from "react";
import { GlobalInfo } from "../../App";
import SuperChild from "./SuperChild";
const Child = () => {
    const { Acolor } = useContext(GlobalInfo);
    console.log('comes from app via context api',Acolor);
    return (<>
        <h5 style={{color:Acolor[0]}}>Child Components (Context API)</h5>
        {/* <span>{Acolor[0]}</span> */}
        <SuperChild/>
    </>);
}
export default Child;