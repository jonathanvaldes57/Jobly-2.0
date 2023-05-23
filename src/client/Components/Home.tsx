import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default (): JSX.Element => {
  const navigate = useNavigate();


  return(
    <div style={{display: "flex", justifyContent: "space-around"}}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{marginTop: '-10px',  width: '100vw'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > 
            <MenuIcon onClick={(): void => console.log("22")}/>
          </IconButton>
          <Button color="inherit" onClick={(): void => navigate('/login')}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}