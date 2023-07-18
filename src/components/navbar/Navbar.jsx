import React from 'react'
import './navbar.css'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine, } from 'react-icons/ri'

import { IoCart } from 'react-icons/io5'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='sofson__navbar section__padding'>
            <div className='sofson__navbar-links'>
                <div className='sofson__navbar-links_logo'>
                    <img src={logo} alt='logo'></img>
                </div>
            </div>
            <div className='sofson__navbar-sign'>
                <div className='sofson__navbar-sign_cart'>
                    <p>Cart </p>
                    <IoCart color='#fff' size={30} />
                </div>
                <button type='button' onClick={() => navigate('login')}>Login</button>

            </div>
        </div>
    )
}

export default Navbar