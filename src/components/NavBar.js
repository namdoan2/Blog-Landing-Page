import {Close, MenuOutlined} from '@material-ui/icons';
import './NavBar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const NavBar = () => {

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

    return(
        <div className='header'>
            <div className='header-active'>
            <h1>Essential Blog</h1>
            <div className='menu-icon'>
                <MenuOutlined className='menu' onClick={showMenu}/>
            </div>
            </div>
        <nav className={active ? 'slider active' : 'slider'}>
            <ul>
                <div className='closed'>
                    <Close className='close' onClick={showMenu}/>
                </div>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Fashion</Link></li>
                <li><Link to='/'>Lifestyle</Link></li>
                <li><Link to='/'>Travel</Link></li>
                <li><Link to='/'>Business</Link></li>
                
            </ul>
        </nav>
        </div>
    )
}

export default NavBar;