import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './product_slider.css'
import { BsCurrencyRupee } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'


const ProductSlider = (props) => {
    const navigate = useNavigate();
    return (
        <div className="scroll-container">
            <div className="scroll-content">
                {
                    Array.from(props.products).map((element, index) => {
                        return (
                            <div onClick={() => navigate('/product')} className="product_slider_child">
                                <img src='https://firebasestorage.googleapis.com/v0/b/kullu-ecommerce.appspot.com/o/ABGC004?alt=media&token=d50f7077-8070-45e6-b2c0-e25e1fdafddb'></img>
                                <p className="product_slider_child_title">{element.title}</p>
                                <div className="product_slider_child_price">
                                    <BsCurrencyRupee></BsCurrencyRupee>
                                    <p> <s>200</s></p>
                                    <BsCurrencyRupee></BsCurrencyRupee>
                                    <p className="product_slider_child_discountedPrice"> 150</p>
                                </div>
                                <div className="product_slider_child_price">
                                    <p>Effective Price</p>
                                    <BsCurrencyRupee></BsCurrencyRupee>
                                    <p className="product_slider_child_effectivePrice"> 130</p>
                                </div>
                                <div className="product_slider_child_price">
                                    <i>(Apply Coupon)</i>
                                </div>

                            </div>
                        )
                    }
                    )
                }
            </div>
        </div >
    )
}

export default ProductSlider


// const ProductSlider = () => {
//     const [slidesToRender, setSlidesToRender] = useState(getAppropriateslides)
//     useEffect(() => {
//         function hanldeResize() {
//             setSlidesToRender(getAppropriateslides())
//         }
//         window.addEventListener('resize', hanldeResize)
//     }, [])
//     function getAppropriateslides() {
//         let screenWidth = window.innerWidth
//         if (screenWidth <= 900) {
//             return 2
//         }
//         else if (screenWidth > 900 && screenWidth <= 1000) {
//             return 3
//         }
//         else {
//             return 4
//         }
//     }
//     const settings = {
//         className: "center",
//         infinite: true,
//         centerPadding: "60px",
//         slidesToShow: slidesToRender,
//         swipeToSlide: true,
//         arrows: true,
//         afterChange: function (index) {
//             console.log(
//                 `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//             );
//         }
//     };
//     return (
//         < Slider {...settings}>
//             {
//                 Array.from({ length: 10 }).map((element, index) => {
//                     return (
//                         <div className="product_slider_child">
//                             <img src='https://firebasestorage.googleapis.com/v0/b/kullu-ecommerce.appspot.com/o/ABGC004?alt=media&token=d50f7077-8070-45e6-b2c0-e25e1fdafddb'></img>
//                         </div>
//                     )
//                 }

//                 )
//             }
//         </Slider>
//     );
// }

// export default ProductSlider
