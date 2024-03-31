import React, {useState} from "react"

export default function Wordcounter() {
  const [text,setText]= useState('Enter Paragraph here');
  const handleChange =(event) => {
    setText(event.target.value);
  }
  const handleClearText =() => {
    let newtext = '';
    setText(newtext);
  }
  const handleUpperCase =() => {
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handlelowerCase =() =>{
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  return (
    <>
      <h5> Enter the Paragraph below: </h5>

      <div className="container my-3">
        <div className="mb-3">
          <textarea
            className="form-control" 
            value={text}
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
      </div>

      <button type="button" className="btn btn-dark mx-3" onClick={handleClearText}>Clear Text</button>
      <button type="button" className="btn btn-dark mx-3" onClick={handleUpperCase}>Convert to Upper case</button>
      <button type="button" className="btn btn-dark" onClick={handlelowerCase}>Convert to lower case</button>

      <div className="container my-5">
        <h5> Paragraph Summary: </h5>
        <p> {text.split(' ').length} words</p>
        <p> {text.length} Characters</p>
      </div>
    </>
  );
}
