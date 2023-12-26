// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css";
import { useContext, useState } from "react"
import { AppContext } from "../context"
import { useCallback } from "react";
// Importing codemirror and related assets
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript';
//themes
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { githubLight, githubLightInit, githubDark, githubDarkInit } from '@uiw/codemirror-theme-github';
// import { basicSetup, minimalSetup } from '@uiw/codemirror-extensions-basic-setup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Savecode_input from './Savecode_input';

export default function Editor_s() {
    

    const {code,setCode,theme,setTheme}=useContext(AppContext);
    const [editorTheme,setEditorTheme]=useState('vscode');
    
    
      const onChange = useCallback((value, viewUpdate) => {
        setCode(value)
    }, []);
     
  return (
    <div className="editor"> 
      
    <Savecode_input style={{marginLeft:'auto',color:theme===false?'black':'#01FF70'}}>Save code</Savecode_input>
    <Select color="success" style={{marginLeft:'auto',color:theme===false?'black':'#01FF70'}}
    value={editorTheme}
    label="Theme"
    onChange={(e)=>{setEditorTheme(e.target.value)}}
  >
    <MenuItem value={'Github Light'}>Github Light</MenuItem>
    <MenuItem value={'Github Dark'}>Github Dark</MenuItem>
    <MenuItem value={'vscode'}>Vscode</MenuItem>
  </Select>
 
    <CodeMirror
     onChange={onChange}
     value={code}
     extensions={[cpp(),java(),python(),javascript({jsx:true})]
   }
     theme={getTheme(editorTheme)}
    />
    </div>
  )
}


const getTheme=(name)=>{
  if(name=='vscode')
  {return vscodeDarkInit({
    settings: {
      caret: '#c6c6c6',
      fontFamily: 'monospace',
    }
  });
}

if(name=='Github Light')
{return githubLightInit({
  settings: {
    caret: '#c6c6c6',
    fontFamily: 'monospace',
  }
});
}

if(name=='Github Dark')
{return githubDarkInit({
settings: {
  caret: '#c6c6c6',
  fontFamily: 'monospace',
}
});
}

}

// simple-code-editor in case codemirror fails:/
{/* <Editor className='editorText'
        value={code}
        onValueChange={value => setCode(value)}           // required despite onChange being involved
        onChange={handleChange}
        highlight={code => highlight(code,languages.js)}
        padding={20}
        placeholder={"WRITE YOUR CODE HERE.."}
      /> */}

      // const handleChange=(e)=>{
      //   const value=e.target.value;
      //   setCode(value)
      //  }