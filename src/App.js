import './App.css';
import About from './components/About';

import { useState } from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { Routes, Route, Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  

  const toggleMode =()=>{
    if (mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode is Enabled","success")
    }
    
    else{
      setMode("dark")
      document.body.style.backgroundColor="#343a40"
      showAlert("Dark Mode is Enabled","success")
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  

  return (
   
    <>

<BrowserRouter>
      
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}  aboutText="About TextUtils"/>
         <Alert alert={alert}/>
         <div className='container'>
        <Routes>
        <Route path="/" element={<TextForm heading="Enter the Text to analyze" showAlert={showAlert} mode={mode}/>} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>

</>
    
  );
}

export default App;
