import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom';  
function RootLayout() {
    return (
        <div>
            <div className="content-container">
                <NavigationBar/>
                <div className="cointainer">
                    <Outlet/>
                </div>
            </div>
                    <div className="footer-container">
                        <Footer/>
                    </div>
                </div>
        
    );
}
export default RootLayout;