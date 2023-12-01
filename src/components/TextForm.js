import React,{useState} from 'react'

export default function TextForm(props) {
  const[text , setText]=useState('');

  const handleClear =() =>{
    let newText='';
    setText(newText);
    props.showAlert("Text is Cleared","success");
  }

  const handleUpClick =() =>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }

  const handleLoClick =() =>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Text has been Reversed","success");
  };

  const handleOnChange =(event) =>{
    setText(event.target.value);
  }
  
  const handleCopy=()=>{
    navigator.clipboard.writeText(text); 
    props.showAlert("Text is Copied","success");
  }

  const handleExtraSpaces = ( ) =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("ExtraSpaces has been Removed","success");
  }

  return (
    <>
  <div className='container' style={{color:props.mode ==='dark'?'white':'black'}}>
  <h3>{props.heading}</h3>    
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'white',
   color:props.mode ==='dark'?'white':'black'}}  id="myBox" rows="10"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverse}>Reverse Text </button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

{/* const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
It is targetted by the button 'speak':

<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}


    </div>

  <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
    <h4>Your Text Summary</h4>
    <p>{text.split(/\s+ /).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0? text:"Nothing to Preview"}</p>
  </div>  
    </>
  )
}
