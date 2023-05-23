import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GoogleButton from 'react-google-button';
import Button from '@mui/material/Button';

export default (): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'system-ui',
      }}
    >
      <h1 >Jobly 2.0</h1>
      <Box
        sx={{
          borderRadius: '30px',
          boxShadow: '3px 3px 10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          border: '1px solid black',
          height: '400px',
          width: '400px',
        }}
        component='form'
        noValidate
        autoComplete='off'
      >
        <h3 style={{ justifyContent: 'center' }}>
          Login to Jobly or stay poor.
        </h3>
        <TextField sx={{ width: "15vw"}} label='Username' variant='outlined' />
        <TextField sx={{ width: "15vw"}} label='Password' variant='outlined' />
        <Button sx={{ border: '1px solid rgb(66,133,244)', boxShadow: '1.5px 1.5px 3px black'}}>Submit</Button>
        <div
          style={{ height: '1px', backgroundColor: 'black', width: '18vw' }}
        ></div>
        <GoogleButton></GoogleButton>
      </Box>
    </div>
  );
};
