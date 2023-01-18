import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " #243b55";
      showAlert("Dark Mode has been Enabled", "success");
      setInterval(() => {
        document.title = "Use TextUtils Now";
      }, 2000);
      setInterval(() => {
        document.title = "Download Textutils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };
  return (
    <div className="container">
      <Navbar
        title="TextUtilities"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform
          showAlert={showAlert}
          heading="Enter Your Text Below"
          mode={mode}
        />
      </div>
    </div>
  );
}

export default App;
