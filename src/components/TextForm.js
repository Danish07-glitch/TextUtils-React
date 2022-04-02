import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const HandleUp = () =>{
        // console.log("uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const HandleChange = (e) =>{
        // console.log("Change was clicked")
        setText(e.target.value)
    }
    const CapitalizeFirst = () =>{
        // console.log("Change was clicked")
            let word=""
            let cap = text.split(" ")
            cap.forEach(element => {
              word += element.charAt(0).toUpperCase() + element.slice(1) + " "
      
            });
            setText(word)
            props.showAlert("Capitilized first letter for each word","success")
    }


    const copyText =()=>{
      var word = document.getElementById("myBox");
      word.select();
      // word.setSelectionRange(0,9999);
      navigator.clipboard.writeText(word.value);
      props.showAlert("Text is copied!","success")

    }
    const removeExtraSpace =()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra spaces are removed","success")
    }
    return (
    
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Example Textarea</label>
    <textarea id="myBox" className='form-control' style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'black' }} onChange={HandleChange} value={text} rows="8"></textarea>
    <button disabled={text.length===0} onClick={HandleUp} className='btn btn-primary my-2 mx1'>Convert to Uppercase</button>
    <button disabled={text.length===0} onClick={CapitalizeFirst} className='btn btn-primary my-2 mx-1'>Captitalize first</button>
    <button disabled={text.length===0} onClick={copyText} className='btn btn-primary my-2 mx-1'>Copy</button>
    <button disabled={text.length===0} onClick={removeExtraSpace} className='btn btn-primary my-2 mx-1'>Remove Extra Spaces</button>
  </div>
  </div>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p id='memo'>{text.replace(/\n/g).split(" ").filter((value) => value!="").length} words and {text.replace(/\n/g,'').length} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview"}</p>
      
      </div>
</>
  )
}
