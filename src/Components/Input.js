function Input({pwd, generator, setPwd}){

    const callCopied=()=>{
        let btn= document.getElementById("copy");
        btn.innerText="Copied!";
        setTimeout(()=>{
            btn.innerHTML="Copy";
        },500);
    }
    return (
        <div className="">
            <div id="input" className="">
            <input type="text" className="text-area" id="text-block" placeholder="Your Password" value={pwd}  onChange={(e)=>{
                    setPwd(e.target.value);
            }}/>
            </div>
            <button className="" id="generate" onClick={()=>{
                generator();
            }} >Generate</button>
           <button className="" id="copy" onClick={()=>{
                navigator.clipboard.writeText(pwd);
                callCopied();
            }}>Copy</button>
            
        </div>
    )
}

export default Input;