import Input from "./Components/Input";
import Length from "./Components/Length";
import Checkboxes from "./Components/Checkboxes";
import './App.css';
import {useState} from "react";
import logo from "./pswdImg.gif"

const stringUpper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const stringLower= "abcdefghijklmnopqrstuvwxyz";
const stringDig= "0123456789";
const stringSym= "`~!@#$%^&*()-_=+[]{}|;:'<>,./?";


function App() {

  const [pswd,setpswd]= useState("");
  const [len, setLen] = useState(6);
  const [lowCase, setLowCase] = useState(true);
  const [upCase, setUpCase] = useState(false);
  const [digits, setDigits]= useState(false);
  const [symbols, setSymbols]= useState(false);
  let pwd="";
  const generator= ()=>{
    while(pwd.length<len){
      let type= Math.floor(Math.random()*4);
      if(type===0&&lowCase===true){
        addLower();
      }
      if(type===1&&upCase===true){
        addUpper();
      }
      if(type===2&&digits===true){
        addDigit();
      }
      if(type===3&&symbols===true){
        addSymbol();
      }
    }
    setpswd(pwd);
    addComment();
  }

  const addComment=()=>{
    let countType= 0;
    if(digits===true)countType++;
    if(lowCase===true)countType++;
    if(upCase===true) countType++;
    if(symbols===true) countType++;
    let html="";
    if(countType===1&&len<8)html+="<b><p class=\"red \">Too Short!</p></b>";
    else if(countType===1&& len<15)html+="<b><p class=\"red \">Very Easy!</p></b>";
    else if(countType===1)html+="<b><p class=\"red \">Easy</p></b>";
    else if(len<8)html+="<b><p class=\"red \">Too Short!</p></b>";
    else if(len<12&&countType===2)html+="<b><p class=\"orange \">Medium</p></b>";
    else if(len<15&&countType<=3)html+="<b><p class=\"blue \">Hard</p></b>";
    else html+="<b><p class=\"green \">Tough</p></b>";
    let comment= document.getElementById("comment");
    comment.innerHTML=html;
  }

  const addLower = ()=>{
    let index= Math.floor(Math.random()*stringLower.length);
    pwd+=stringLower[index];
  }
  const addUpper = ()=>{
    let index= Math.floor(Math.random()*stringUpper.length);
    pwd+=stringUpper[index];
  }
  const addDigit = ()=>{
    let index= Math.floor(Math.random()*stringDig.length);
    pwd+=stringDig[index];
  }
  const addSymbol = ()=>{
    let index= Math.floor(Math.random()*stringSym.length);
    pwd+=stringSym[index];
  }

  return (
    <div className="App">
      <img className="images" id="logo" src={logo} alt="Here"/>
      <h2>PASSWORD GENERATOR</h2>
      <p>Create strong and secure passwords to keep your account safe online.</p>
      < Input pwd={pswd} generator={generator} setPwd={setpswd}/>
      <div id="comment"><p></p></div>
      < Length len={len} setLen={setLen} />
      < Checkboxes setLowCase={setLowCase} setDigits={setDigits} setUpCase={setUpCase} setSymbols={setSymbols}/>
    </div>
  );
}

export default App;
