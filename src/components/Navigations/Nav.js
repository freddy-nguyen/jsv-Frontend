import React from 'react';
import './Nav.scss'
import { NavLink } from 'react-router-dom'
const Nav = (props) => {
    return (
        <body>
            <div className='topnav'>
                <header>
                    <img src="https://codetheweb.blog/assets/img/icon2.png"></img>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/news">News</NavLink></li>
                            <li><NavLink to="/">Terms of use</NavLink></li>
                            <li><NavLink to="/">Contact</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>
            <main>
            </main>
        </body>
    );
};

export default Nav;