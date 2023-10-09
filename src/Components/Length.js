function Length({len, setLen}){

    return (
        <div id="length-container">
            <p>Password Length : {len}</p>
            <input type="range" min="6" max="30"  step="1" id="range" value={len} onChange={(e)=>{
                setLen(e.target.value);
            }}/>
        </div>
    )
}

export default Length;