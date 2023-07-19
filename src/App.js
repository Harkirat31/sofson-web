import React from 'react'
import './App.css'

import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Product from './pages/Product'
import Login from './pages/Login'
import { Navbar } from './components'


const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/account" element={<Account />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/category" element={<Category />} />
                <Route path="/product" element={<Product />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default App