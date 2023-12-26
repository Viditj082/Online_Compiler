import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useEffect } from 'react';
import {Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Icons from '../Iconpaths';
import ListItems from './ListItems';
import { AppContext } from '../context';
import { useContext } from 'react';
import Tooltip from '@mui/material/Tooltip';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Template() {

  const [open, setOpen] = React.useState(false);
  const {theme}=useContext(AppContext);

  const handleClickOpen = () => {
    setOpen(true);
    const arrayData=localStorage.getItem("saved_codes");
    const array=JSON.parse(arrayData);
    setItems(array);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteAll = () => {
       localStorage.setItem("saved_codes","[]");
       setItems([]);
  }
  
  const [items,setItems]=React.useState([]);

  return (
    <React.Fragment >
      
      <Tooltip title='View your saved templates'>
      <Button variant="text" onClick={handleClickOpen} className='saved-button' style={{fontSize:'10px'}}>
       View Saved Templates
      </Button>
      </Tooltip>

      <Dialog style={theme==0?{background:'white'}:{background:'#1D1E22',color:'white'}}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >

        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Saved Templates
            </Typography>
            
            <Button variant='outlined' style={{color:'white',border:'1px solid white',fontSize:'10px'}} onClick={deleteAll}>Delete all</Button>

          </Toolbar>
        </AppBar>

        <List style={theme==0?{background:'white'}:{background:'#1D1E22',color:'white'}}>
          {items===null?null:items.map(item=>{
            return (
              <ListItems id={item.id} title={item.title} code={item.code} lang={item.lang} items={items} setItems={setItems}/>
            )
          })}
        </List>
      </Dialog>
    </React.Fragment>
  );
}
