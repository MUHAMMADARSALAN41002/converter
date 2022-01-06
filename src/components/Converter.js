import React, {useRef, useState} from 'react'
import './Converter.css'

const Converter = () => {

    const inputvalue = useRef();
    const fromvalue = useRef();
    const tovalue = useRef();
    const [result, setresult] = useState("0");
    const [newvalue, setnewvalue] = useState('0');
    const [fromcurr, setfromcurr] = useState("");
    const [tocurr, settoocurr] = useState("");

    const convertvalue = () => {
        
        const value = inputvalue.current.value;
        const from = fromvalue.current.value;
        const to = tovalue.current.value;
        let result;
        
        if(from === "pkr" && to==="usd"){
            result = value * 0.0057;
            setnewvalue(value)
            setfromcurr('pkr')
            settoocurr('usd')
            setresult(result)
        }
        else if(from=== "pkr" && to==="pkr"){          
            result = value;  
            setnewvalue(value)
            setfromcurr('pkr')
            settoocurr('pkr') 
            setresult(result)
        }
        else if(from === "usd" && to==="pkr"){
            result = value * 178;
            setnewvalue(value)
            setfromcurr('usd')
            settoocurr('pkr')
            setresult(result)
        }
        else if(from=== "usd" && to==="usd"){          
            result = value;  
            setnewvalue(value)
            setfromcurr('usd')
            settoocurr('usd')
            setresult(result) 
        }
    }

    return (
        <div className='container'>
            <div className="converter-body">

                <h2 className="converter-title">Currency Converter</h2>

                <input type="number" placeholder="Enter Amount" className="input" id="input" ref={inputvalue} />
              
               <br />
                From
                <select id="from" ref={fromvalue}> 
                    <option value="pkr">pkr</option>
                    <option value="usd">usd</option>
                </select>
                <br />
                To
                <select id="to" ref={tovalue}>
                    <option value="pkr">  pkr</option>
                    <option value="usd">usd</option>
                </select>

                <div className="convert">
                <button className="button" onClick={convertvalue}>convert</button>
                </div>
                 
                <span className='footer'>{`${newvalue} ${fromcurr} = ${result} ${tocurr} `}</span>
            </div>
        </div>
    )
}
export default Converter;