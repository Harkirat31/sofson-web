import React from 'react'
import './promotions.css'

import { Slider, Deal, } from '../../components'

const Promotions = () => {
    return (
        <div className='sofson__promotions section__padding'>
            <Slider></Slider>
            <Deal></Deal>
        </div>
    )
}

export default Promotions