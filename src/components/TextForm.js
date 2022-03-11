import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here");
    const HandleUp = () =>{
        console.log("uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const HandleChange = (e) =>{
        console.log("Change was clicked")
        setText(e.target.value)
        
    }
    return (
    
        <>

    <h1>{props.heading}</h1>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Example Textarea</label>
    <textarea id="myBox" className='form-control' onChange={HandleChange} value={text} rows="8"></textarea>
    <button onClick={HandleUp} className='btn btn-primary my-2'>Convert to Uppercase</button>
  </div>
</>
  )
}
