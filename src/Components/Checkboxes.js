function Checkboxes({setDigits, setUpCase, setSymbols}){


    return (
        <div id= "Checkbox">
            <label htmlFor="1"className="left">Uppercase Leters</label>
            <input type="checkbox" className="right" name="" id="1" onClick={(e)=>{
                    if(e.target.checked===true)setUpCase(true);
                    else setUpCase(false);
            }} /> <br />
            <label htmlFor="2" className="left">Lowercase Leters</label>
            <input type="checkbox" checked className="right" name="" id="2"/> <br />
            <label htmlFor="3" className="left">Digits</label>
            <input type="checkbox" className="right" name="" id="3" onClick={(e)=>{
                    if(e.target.checked===true)setDigits(true);
                    else setDigits(false);
            }} /> <br />
            <label htmlFor="4" className="left">Symbols</label>
            <input type="checkbox" className="right" name="" id="4" onClick={(e)=>{
                    if(e.target.checked===true)setSymbols(true);
                    else setSymbols(false);
            }} /> <br />
        </div>
    )
}

export default Checkboxes;