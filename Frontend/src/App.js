
import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import Input from './components/Input';
import Output from './components/Output';
import Navbar from './components/Navbar';
import { AppContext } from './context';
import Editor_s from './components/Editor';
import LinearProgress from '@mui/material/LinearProgress';

function App() {
  
  const [code,setCode]=useState('#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main()\n{\ncout<<"Hello World";\nreturn 0;\n}');
  const [output,setOutput]=useState('');
  const [input,setInput]=useState('');
  const [language,setLanguage]=useState('cpp');
  const [loading,setLoading]=useState(false);
  const [theme,setTheme]=useState(0);

  const HandleClick=()=>
  {

    setLoading(true)

    // http://localhost:5000                         -->local
    // https://debugger-backend-latest.onrender.com  -->web service

     axios.post(`http://localhost:5000/run/${language}`,{
        input:input,
        code:code
     }).then((res)=>{
      const response=res.data.toString();
      const str=response.replace('\r\n','\n')
      console.log(str+ "  :op")
      setOutput(str) 
      setLoading(false)
     }).catch((error)=>{
        setLoading(false)
        setOutput(error.toString())
     })
    

  }

  return (
    
    <AppContext.Provider value={{code,setCode,input,setInput,output,setOutput,loading,setLoading,language,setLanguage,theme,setTheme}}>
    <div className='App' style={theme===false?{background:'white'}:{background:'#1D1E22',color:'white'}}>
    <Navbar/>
    
    {loading &&  <LinearProgress color="secondary" />
}
    <div className='container'>
    
    <div className='bottomContainer'>
    <Input/>
    <Output/>
    </div>
    
    <Editor_s/>
   
    </div>
    
    <button  className='run' onClick={HandleClick} style={loading===true?{pointerEvents:'none',opacity:0.5}:{pointerEvents:'visible',opacity:1}}> Run 🏃‍♂️</button>
    </div>
    
    </AppContext.Provider>
    
  );
  }

export default App;
