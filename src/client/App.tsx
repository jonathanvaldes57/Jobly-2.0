import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home';
import Main from './Components/Main';
import Login from './Components/Login';

export default (): JSX.Element => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/Main" element={<Main />}/>
                <Route path="/" element={<Login />}/>
            </Routes>
        </div>
    )
}