import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState } from "react"
import { AppContext } from "../context"
import map from '../BoilerPlates';
import Icons from '../Iconpaths';
import Switch_n from './Switch';

export default function Navbar() {

  console.log('navbar')

  const {language,setLanguage,code,setCode}=useContext(AppContext);
     
  const handleChange = (event) => {
    const lang=event.target.value;
    setLanguage(lang);
    console.log(lang)
    // set code to their respective boilerplates
   
    setCode(map.get(lang))
    
  };

  return (

    <AppBar position="static" style={{padding:'0.5rem 1rem',background:'#161616',height:'10vh'} }>
          <Toolbar>
          <img  className='logo' src={require('../logo-no-background.png')}/>
          
          <Switch_n className='switch'/>

          <Select className='lang_menu' style={{color:'white',marginLeft:'auto',fontSize:'15px',fontStyle:'bold'}} 
          value={language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value='cpp'>C++</MenuItem>
          <MenuItem value='Java'>Java</MenuItem>
          <MenuItem value='python'>Python</MenuItem>
          <MenuItem value='js'>JavaScript</MenuItem>

        </Select>
        
        <img className='lang_icon' src={require(`${Icons.get(`${language}`)}`)} />
        </Toolbar>
    </AppBar>
  )

}

