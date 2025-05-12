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
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743' }}>
<h1>{props.heading}- {text}</h1>
<div className="mb-3 my-3">
  <label for="mybox" class="form-label">Example textarea</label>
  <textarea style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'#042743' }} onChange={handleOnChange} id="myBox" value={text} className="form-control"  rows="8"></textarea>
</div>
<btn onClick={handleUpClick} className="btn btn-primary mx-2">Convert to upper case</btn>
<btn onClick={handleLoClick} className="btn btn-primary mx-2">Convert to lower case</btn>
<btn onClick={handleClrClick} className="btn btn-primary mx-2">Clear Text</btn>
<btn onClick={handleCopy} className="btn btn-primary mx-2">Copy Text</btn>
<btn onClick={handleExtraSpaces} className="btn btn-primary mx-2">Remove Extra Spaces</btn>

    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743' }}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
    </div>
    </>
  )
}
