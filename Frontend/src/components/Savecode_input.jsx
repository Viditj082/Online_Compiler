import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

import { useContext } from 'react';
import { AppContext } from '../context';
import Button from '@mui/material/Button';

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

export default function Savecode_input() {
    
    const {code,language}=useContext(AppContext);
    const [title,setTitle]=useState();

    const [open, setOpen] = useState(false);
    const [err,setErr]=useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {

      if(title==null || title.length===0)
      {
      setErr(true);
      return;
      }
      
      setOpen(false);
      
      const obj={title:title,lang:language,code:code};
      const oldvalue=localStorage.getItem("saved_codes");
      const oldArray=JSON.parse(oldvalue);

      if(oldvalue===null)
      {
        const arr=[obj];
        localStorage.setItem("saved_codes",JSON.stringify(arr));
      }
      else
      {
      const newArray=[...oldArray,obj];
      localStorage.setItem("saved_codes",JSON.stringify(newArray));
      }
    
    };
  
    return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
          Save code
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Template Creation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Create your own template which can be accessed anytime later
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="email"
              fullWidth
              variant="outlined"
              onChange={(e)=>{setTitle(e.target.value); setErr(false)}}
              value={title}
              
/>

{err===true?(<p style={{color:'red'}}>Title should not be empty</p>):null}

<h2>Code:</h2>
<Editor className='editorText'
        value={code}
        contentEditable={false}
        highlight={code => highlight(code,languages.js)}
        padding={20}
        placeholder={"Enter Input.."}
    />
            

          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={()=>{setOpen(false)}}>Exit</Button>
          </DialogActions>
        
        </Dialog>
      </>
    );
  }