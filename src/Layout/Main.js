import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer.jsx';
import Header from '../Components/Header.jsx';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;