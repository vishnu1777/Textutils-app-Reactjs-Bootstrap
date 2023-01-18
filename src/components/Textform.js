import React, { useRef, useState } from "react";

export default function Textform(props) {
  // useState Hook
  const [text, setText] = useState("");

  // Events
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    if (newText.length === 0) {
      props.showAlert("Enter Text To Convert", "warning");
    } else {
      setText(newText);
      props.showAlert("Converted to upperCase!", "success");
    }
  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    if (newText.length === 0) {
      props.showAlert("Enter Text To Convert", "warning");
    } else {
      setText(newText);
      props.showAlert("Converted to lowerCase!", "success");
    }
  };

  // On change event when we change the text in our textArea
  const handleOnChange = (event) => {
    const newText = event.target.value;

    setText(newText);
  };
  const eraseText = () => {
    if (text.length === 0) {
      props.showAlert("Enter some text to clear", "warning");
    } else {
      setText("");
      props.showAlert("Text Cleared!", "success");
    }
  };

  const handleCopy = () => {
    if (text.length === 0) {
      props.showAlert("Enter Text To Copy!", "warning");
    } else {
      var copyText = document.getElementById("myBox");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text Copied!", "success");
    }
  };
  const handleExtraSpaces = () => {
    if (text.length === 0) {
      props.showAlert("Enter Text To HandleSpace", "warning");
    } else {
      let newText = text.trim().split(/ +/).join(" ");
      setText(newText);
      props.showAlert("Extra spaces handled!", "success");
    }
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === `dark` ? `white` : `#243b55`,
        }}
      >
        <h1>{props.heading}</h1>
        <hr />

        <textarea
          className="form-control my-4"
          value={text}
          placeholder="Enter Text Here"
          style={{
            backgroundColor: props.mode === `dark` ? ` #243b55` : `white`,
            color: props.mode === `dark` ? `white` : `#243b55`,
          }}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={eraseText}>
          Clear
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Handle Spaces
        </button>
      </div>

      <div
        className="container my-2"
        style={{
          backgroundColor: props.mode === `dark` ? ` #243b55` : `white`,
          color: props.mode === `dark` ? `white` : `#243b55`,
        }}
      >
        <h2>Your Text Summary </h2>
        {/* <p>WPM {text.length / 5 / sec}</p> */}
        <p>
          {text.split(" ").length - 1} words And {text.length} characters
        </p>
        <p>
          {text.split(" ").length - 1 * 0.008} Minutes takes to read this script
        </p>
        <h2>Preview </h2>
        <p>
          {text.length > 0
            ? text
            : "Enter some Text In The Text Area To Preview It here"}
        </p>
      </div>
    </>
  );
}
