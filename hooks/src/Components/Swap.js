import React, { useEffect, useState } from "react"
import ReactTypingEffect from 'react-typing-effect';
export default function Swap() {
    let [ListA, setListA] = useState(['1', '2', '3', '4', '5'])
    let [ListB, setListB] = useState(['6', '7', '8', '9', '10'])
    let [TmpA, setTmpA] = useState([]);
    let [TmpB, setTmpB] = useState([]);

    
    const HandleChange = (e) => {
        if (e.target.checked) {
            let arr = [...TmpA, e.target?.value];
            setTmpA(arr);
        } else {
            let indx = TmpA.indexOf(e.target?.value);
            console.log(indx);
           TmpA.splice(indx, 1);
            setTmpA(TmpA);
        }

    }
    const HandleChange1 = (e) => {
        if (e.target.checked) {
            let arr = [...TmpB, e.target?.value];
            setTmpB(arr);
        } else {
            let indx = TmpB.indexOf(e.target?.value);
             TmpB.splice(indx, 1);
            setTmpB(TmpB);
        }
    }
    const leftBtn = () => {
        let bool = window.confirm("Do you want in orderd list or not ?");
        console.log(bool);
        let arr = [];
        if (bool) {
            arr = [...ListA, ...TmpB];
            arr.sort((a, b) => a - b);
        } else {
            arr = [...ListA, ...TmpB];
        }
        for (let i = 0; i <= TmpB.length - 1; i++) {
            let delB = ListB.indexOf(TmpB[i]);
            console.log(delB, TmpB[i]);
            ListB.splice(delB, 1);
        }
        setListA(arr);
        setTmpB([]);
    }
    const rightBtn = () => {
        let bool = window.confirm("Do you want in orderd list or not ?");
        console.log(bool);
        let arr = [];
        if (bool) {
            arr = [...ListB, ...TmpA];
            arr.sort((a, b) => a - b);
        } else {
            arr = [...ListB, ...TmpA];
        }
        for (let i = 0; i <= TmpA.length - 1; i++) {
            let delA = ListA.indexOf(TmpA[i]);
            console.log(delA, TmpA[i]);
            ListA.splice(delA, 1);
        }
        setListB(arr);
        setTmpA([]);
    }
    return (
        <>


<ReactTypingEffect
        text={["Let's Started", "Puzlle"]}
      />

      <br />

      <ReactTypingEffect
        text={["Swap.", "Number's"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h4>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'green'} : { color: 'gray'}}
                  >{char}</span>
                );
              })}
            </h4>
          );
        }}        
      />
        <div>
            <div className="listA">
                <h1>List A <span style={{ color: "GrayText", fontSize: '15' }}>{ListA.length}</span></h1>
                {
                    ListA.map((da) => {
                        return (
                            <>
                                <label key={da}>{da}</label>
                                <input type="checkbox" key={da + "@"} name="checkA" value={da} onChange={HandleChange} />
                            </>
                        )
                    })
                }
            </div>
            <div className="listB">
                <h1>List B <span style={{ color: "GrayText", fontSize: '15' }}>{ListB.length}</span></h1>
                {
                    ListB.map((da) => {
                        return (
                            <>
                                <label key={da}>{da}</label>
                                <input type="checkbox" key={da + "@"} name="checkB" value={da} onChange={HandleChange1} />
                            </>
                        )
                    })
                }
            </div>
            <div>
                <button onClick={leftBtn}>Left</button>
                <button onClick={rightBtn}>Right</button>
            </div>

        </div>
        </>
    )
}

