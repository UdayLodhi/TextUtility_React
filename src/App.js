import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode=()=>{
    if(mode ==='dark'){
      setmode('light');
      document.body.style.background="white";
      showAlert("Light Mode has been Enabled","success");
    }
    else{
      setmode('dark');
      document.body.style.background="#162345";
      showAlert("Dark Mode has been Enabled","success");
    }
  }


  return (
    <>
  <Router>
  <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>

  <div className="container my-3">
  {/* <Routes>    //For react router dom Version 5 and below 
          <Route path="/about">
          <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below:"  mode={mode}/>
          </Route>
  </Routes> */}
    
  {/* For react router dom Version 6 and Above  */}
  <Routes>      
  <Route exact path="/about" element={<About mode={mode}/>} />
  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze below:"  mode={mode}/>} />
  </Routes>
  </div>
  </Router>
    </>
    
  );
}

export default App;
