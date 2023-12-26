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
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';



export default function ListItems({id,title,code,lang,items,setItems}) {

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

    const handleDelete=(e)=>{
      
        const newArray=items.filter(item=>item.id!==id);
        setItems(newArray);
        localStorage.setItem("saved_codes",JSON.stringify(newArray));

    }

  return (
  //   onMouseEnter={(e)=>{
  //     e.target.style.transform='scale(1.01)'
  // }} onMouseLeave={(e)=>{
  //     e.target.style.transform='scale(1)'}}
    <div className='list-item' style={{border:'0.2ch solid rgb(25,118,210)', transition:'0.2s',paddingLeft:'10px'}}>
        <ListItem button onClick={click} > 

            <span>
              
            <ListItemText primary={title} style={{fontWeight:'bold'}}/>

            {open ? <ExpandLess /> : <ExpandMore />}

            <img className='lang_icon' src={require(`${Icons.get(`${lang}`)}`)} style={{width:'30px', height:'30px'}} />
            <Tooltip title='Copy to clipboard'>
            <ContentCopyIcon text={code} style={{marginLeft:'auto'}} className='copyIcon' onClick={()=>{
              navigator.clipboard.writeText(code).then(()=>{

                

              }).catch(err=>console.log(err));
            }}/>
            </Tooltip>
            <Tooltip title='Delete this template'>
            <DeleteIcon onClick={handleDelete} className='deleteIcon' style={{marginLeft:'auto'}}/>
            </Tooltip>

            </span>

          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
        <div>

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
