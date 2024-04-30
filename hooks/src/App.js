import React, { createContext, useState } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
// import Test from './Components/Test';
import UseMemo from './Components/UseMemo';
import Debounce from './Components/Debounce';
import Swap from './Components/Swap';
import UseCallbackHook from './Components/UseCallback';
import Child from './Components/ContextApi/Child';

export const GlobalInfo = createContext();
function App() {

  const [color, setColor] = useState(['red','green']);
const [bgColor,SetBgColor] = useState("white");

  // data comes from superchild 
  const getData = (item)=>{
console.log("Data comes from  Super child", item);
SetBgColor(item);
  }
  return (
    <>
      {/* <h4>---------------------------------------------------</h4>
    <UseCallbackHook/>
    <h4>---------------------------------------------------</h4>
    <Swap/>
    <h4>-------------Debounce Search----------------------</h4>
   <Debounce/>
   <h4>---------------------------------------------------</h4>
    <h3>App</h3>
    <ProductList/>
    <h4>---------------UseMemo Hook-------------------------</h4>
    <UseMemo/>
    <h4>---------------------------------------------------</h4> */}
      <GlobalInfo.Provider value={{ Acolor: color,getData:getData}}>
        <div style={{backgroundColor:bgColor}}>
        <h5> App - ContextAPI</h5>
        <Child/>
        </div>
      </GlobalInfo.Provider>
    </>
  );
}
export default App;
