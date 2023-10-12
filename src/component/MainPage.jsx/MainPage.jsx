import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';


const MainPage = () => {
    return (
        <div className='w-screen'>
            <Header/>     
            <Outlet/>  
            
             
        </div>
    );
};

export default MainPage;