import React, { useState } from "react"; /*hooks*/

export default function Signin(props) {
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Learner"); /*2nd initial value is learner*/

  const [customestyle, setCustomestyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const handleModeChange = () => {
    if (customestyle.backgroundColor === "white") {
      setCustomestyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setCustomestyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const handleClick = () => {
    alert("It's pleasure to have to onboard : " + text);
  };

  return (
    <>
      <div className="container my-5" style={customestyle}>
        <center>
          {" "}
          <h4>Welcome to my Website {text} !!</h4>
        </center>
        <h6> {props.header_title}</h6>

        <form>
          <div className="row mb-3 my-5">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              User ID
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                value={text}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3 my-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10 my-3">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary my-5 mx-3"
            onClick={handleClick}
          >
            Sign in
          </button>
          <button
            type="submit"
            className="btn btn-primary my-5"
            onClick={handleModeChange}
          >
            {btntext}
          </button>
        </form>
      </div>
    </>
  );
}
