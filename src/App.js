import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether darkmode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
  })
  setTimeout(()=> {
    setAlert(null);
  }, 3000)
  }
  
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }
   }
  
   return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
    <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element= {<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> } />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;
