import { useContext, useState } from "react"
import { AppContext } from "../context"
import CircularProgress from '@mui/material/CircularProgress';

export default function Output() {

  console.log('output')

  const {output,setOutput,loading,setLoading}=useContext(AppContext);
 
  return (
    <div className='boxes'>
    <h3>Output</h3>
    {loading===true?<CircularProgress  style={{translate:'50% 50%'}}/>:
    <div  className='textArea' contentEditable style={output.includes('Error')?{color:'red'}:{color:'#00AAF9'}}>
   {output}
   </div>
   }
   
   </div>
    )
}
