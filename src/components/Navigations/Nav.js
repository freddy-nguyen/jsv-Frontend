import React from 'react';
import './Nav.scss'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Nav = (props) => {
    const [isShow, setIsShow] = useState(false);
    const location = useLocation();
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (session) {
            setIsShow(true)
        }
        if (location.pathname == '/login') {
            setIsShow(false)
        }
    }, []);

    return (
        <>
            {isShow == true &&
                <div className='topnav'>
                    <header>
                        <img src="https://i.ibb.co/nR6bYpx/app-Logo-removebg-preview.png" alt="VibeVerse"></img>
                        <nav>
                            <ul>
                                <li><NavLink to="/" exact>Home</NavLink></li>
                                <li><NavLink to="/project">Project</NavLink></li>
                                <li><NavLink to="/users">User</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                </div>}
        </>
    );
};

export default Nav;