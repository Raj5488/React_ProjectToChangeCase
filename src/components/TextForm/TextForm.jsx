import { useState } from "react";
import "../TextForm/TextForm.css"
function TextFrom(props){
    const handleUpChange = () => {
        // console.log("Uppercase was clicked: " + text);
        let netText = text.toUpperCase()
        setText(netText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter the text");
    // how to manupulate and text value
    // text = "This wrong method to change value";
    // setText = "This is right method to change value"
    return(
    <div className="MainSection">
            <h1>{props.heading}</h1>
            <div className ="mb-3">
            <textarea className = "form-control" value={text} id="myBox" onChange={handleOnChange} rows="18">       
            </textarea>
            </div>      
            <button className="btn-btn-primary" onClick= 
                {handleUpChange}>Convert to Upper Case</button>
    </div>
    )
}
export default TextFrom;