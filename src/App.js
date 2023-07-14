import React from 'react'
import './App.css'

import { Navbar, Trial } from './components'
import { Promotions, SubCategory } from './container'

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Promotions></Promotions>
            <Trial></Trial>
            <SubCategory name="Value Pack"></SubCategory>
            <SubCategory name="Products"></SubCategory>
            <SubCategory name="Refills"></SubCategory>
            <SubCategory name="House of Fragrances"></SubCategory>
        </div>
    )
}

export default App