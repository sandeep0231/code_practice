import React,{useContext} from "react";
import { GlobalInfo } from "../../App";

const SuperChild = () => {
    const  {Acolor,getData}= useContext(GlobalInfo);
let bgColor = 'gray';
return (<>
<h5 style={{color:Acolor[1]}}>Super Child (ContextAPI)</h5>
<button onClick={()=>getData(bgColor)}>Click!</button>
    </>);
}
export default SuperChild; 