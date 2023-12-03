import "./App.css";
import Navbar from "./components/navbar";
import Textform from "./components/textform";
import Alert from "./components/alert";
// import About from "./components/about";
// import React from "react";
// import { BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
setAlert(
  {
    msg:message,
    type:type,
  }
)
setTimeout (()=>{
  setAlert(null);
}, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#15153f";
      showalert ("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert ("light mode has been enabled", "success");
    }
  };
  return (
  <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert}/>
      < div className="container my-3">
      {/* <Routes> */}
     {/* <Route path="/about" element= {<About/>}/> */}
     {/* <Route path="/" element= { */}

<Textform showalert={showalert} heading="Enter the text to analyze below" mode={mode} />


        {/* <About/> */}
        {/* </Routes>    */}


</div>
{/* </Router> */}
      
    </>
  );
}
export default App;