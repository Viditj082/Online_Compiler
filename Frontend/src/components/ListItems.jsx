import React, { useState } from 'react'
import {Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Icons from '../Iconpaths';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

import CodeMirror from '@uiw/react-codemirror';
import { AppContext } from '../context';
import { useContext } from 'react';

export default function ListItems({title,code,lang}) {

    const [open,setOpen]=useState(false);
    const {theme}=useContext(AppContext);

    const click=()=>{
        setOpen(
            ()=>{
                if(open===false) return true;
                else return false;
            }
        )
    }
  return (
    <div className='list-item' style={{border:'0.2ch solid rgb(25,118,210)', transition:'0.2s',paddingLeft:'10px'}} onMouseEnter={(e)=>{
        e.target.style.transform='scale(1.01)'
    }} onMouseLeave={(e)=>{
        e.target.style.transform='scale(1)'}}>
        <ListItem button onClick={click} > 
            <span><ListItemText primary={title} style={{fontWeight:'bold'}}/>

            {open ? <ExpandLess /> : <ExpandMore />}
            <img className='lang_icon' src={require(`${Icons.get(`${lang}`)}`)} style={{width:'30px', height:'30px'}} />
            </span>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
        <div>
        {/* <Editor className='editorText' style={{maxHeight:'300px', overflow:'auto', border:'none'}}
        value={code}
        onValueChange={()=>{}}
        highlight={code => highlight(code,languages.js)}
        padding={20}
    
    /> */}

<CodeMirror
editable='false'
     value={code}
     style={theme==0?{color:'green',maxHeight:'300px', overflow:'auto'}:{color:'blue',maxHeight:'300px', overflow:'auto'}}
    />
        </div>
      </Collapse>
    </div>
  )
}
