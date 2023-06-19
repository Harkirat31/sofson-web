import React from 'react'
import './App.css'

import { Navbar, Trial, Deal } from './components'
import { Promotions } from './container'

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Promotions></Promotions>
            <Trial></Trial>
        </div>
    )
}

export default App