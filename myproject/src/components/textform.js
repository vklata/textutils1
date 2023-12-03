
import React, {useState} from'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
// console.log("Uppercase was clicked" + text);
let newText=text.toUpperCase(); 
setText (newText)
props.showalert("To converted to uppercase", "success")
}
const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toLocaleLowerCase(); 
    setText (newText)
    props.showalert("To converted to lowercase", "success")
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
const handleOnChange = (event)=>{
// console.log ("On change");
setText (event.target.value)
}
const [text, setText] = useState('');
// text =
// "new text"; // Wrong way to change the state
// setText("new text"); // Correct way to change the state
return (
    <>
<div className="container">
<h1 style={{color: props.mode=== 'dark'? 'white': 'black'}}>{props.heading}</h1>
<div className="mb-3" >
<textarea
className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'light'? 'white': 'grey', color:props.mode==='light'? 'dark':'light'}} id="myBox"/>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>

<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowerrcase</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
</div>

<div className="conatiner" style={{color: props.mode=== 'dark'? 'white': 'black'}}>
    <h1>Your length summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h1>Preview</h1>
    <p>{text}</p>
</div>
</>
  )
  }
  
  
