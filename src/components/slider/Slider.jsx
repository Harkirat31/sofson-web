import React from 'react'
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <div className='sofson__promotions_slider'>
            <div className='sofson__promotions_slider-container'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/kullu-ecommerce.appspot.com/o/2022-07-10%2009%3A32%3A28.053?alt=media&token=06055728-b8bb-4e81-a89d-5b2f9a855ebd"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/kullu-ecommerce.appspot.com/o/2022-07-10%2009%3A29%3A03.432?alt=media&token=45d1d901-39a5-4aff-bfec-63d979c45d91"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Slider