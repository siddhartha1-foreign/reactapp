import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log('handleUpClick');
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Coverted to uppercase","success");
    }
    const handleLoClick= ()=>{
      console.log('handleLoClick');
      let newtext=text.toLowerCase();
      setText(newtext);
       props.showAlert("Coverted to lowercase","success");
  }
  const handleClrClick= ()=>{
    console.log('handleLoClick');
   
    setText("");
      props.showAlert("Text Cleared","success");
   }

    const handleCopy= ()=>{
      var text =document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard","success");
   }

    const handleExtraSpaces= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
         props.showAlert("Removed extra space","success");
    }
  
    const handleOnChange= (event)=>{
        console.log('On Change');
        // setText("You have on hadleUpClick");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
      <>
    <div className="container" >
<h1 className="mx-3 mb-2" style={{color:props.mode === 'dark'?'white':'#042743' }}>{props.heading}- {text}</h1>
<div className="mb-3 my-3">
  <label for="mybox" class="form-label" style={{color:props.mode === 'dark'?'white':'#042743' }}>Example textarea</label>
  <textarea style={{backgroundColor:props.mode === 'dark'?'#13466e':'white', color:props.mode === 'dark'?'white':'#042743' }} onChange={handleOnChange} id="myBox" value={text} className="form-control"  rows="8"></textarea>
</div>
<btn onClick={handleUpClick} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Convert to upper case</btn>
<btn onClick={handleLoClick} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Convert to lower case</btn>
<btn onClick={handleClrClick} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Clear Text</btn>
<btn onClick={handleCopy} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Copy Text</btn>
<btn onClick={handleExtraSpaces} disabled={text.length===0} className="btn btn-primary mx-2 my-1">Remove Extra Spaces</btn>

    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743' }}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
