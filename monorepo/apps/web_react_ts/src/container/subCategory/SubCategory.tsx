import React from 'react'
import { useState, useEffect } from 'react'
import { ProductSlider } from '../../components'
import "./sub_category.css"
import { ProductFields } from 'types'


const SubCategory = (props: { name: string }) => {
    const [products, setProducts] = useState<ProductFields[]>([])
    useEffect(() => {
        let products: ProductFields[] = [
            {
                title: "Glass Cleaner",
                description: "glass cleaning product",
                price: "99",

            },
            {
                title: "Toilet Cleaner",
                description: "toilet cleaning product",
                price: "199",

            },
            {
                title: "Washing Powder",
                description: "clothes cleaning product",
                price: "199",

            },
            {
                title: "Tile Cleaner",
                description: "tile cleaning product",
                price: "184",

            },
            {
                title: "Kitchen Cleaner",
                description: "kitchen cleaning product",
                price: "154",

            }
        ]
        setProducts(products)
    }, [])
    return (
        <div className='section__padding'>
            <div className='subCategory_heading'>
                <h3>{props.name}</h3>
                <h3>{"See More"}</h3>
            </div>
            <ProductSlider products={products}></ProductSlider>
        </div>

    )
    // return (
    //     <div className='scrollable-container section__padding'>
    //         <div className='scrollable-content'>
    //             {
    //                 Array.from({ length: 3 }).map((element, index) =>

    //                     <img style={{ width: 300 }} src='https://firebasestorage.googleapis.com/v0/b/kullu-ecommerce.appspot.com/o/ABGC004?alt=media&token=d50f7077-8070-45e6-b2c0-e25e1fdafddb'></img>

    //                 )
    //             }


    //         </div>
    //     </div>
    // )
}

// const SubCategory = (props) => {

//     const [numComponents, setNumComponents] = useState(calculateNumComponents);

//     useEffect(() => {
//         const handleResize = () => {
//             setNumComponents(calculateNumComponents())
//         };

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <div className='sofson_subCategory section__padding'>
//             <p>{props.name} </p>
//             <div>
//                 <Carousel>
//                     <Carousel.Item>
//                         {
//                             Array.from({ length: numComponents }).map((element, index) =>
//                                 <div>
//                                     <img style={{ width: 300 }} src='https://firebasestorage.googleapis.com/v0/b/kullu-ecommerce.appspot.com/o/ABGC004?alt=media&token=d50f7077-8070-45e6-b2c0-e25e1fdafddb'></img>
//                                 </div>
//                             )
//                         }

//                     </Carousel.Item>
//                     <Carousel.Item>
//                         {
//                             Array.from({ length: numComponents }).map((element, index) =>
//                                 <div>
//                                     <img style={{ width: 300 }} src='https://firebasestorage.googleapis.com/v0/b/kullu-ecommerce.appspot.com/o/ABGC004?alt=media&token=d50f7077-8070-45e6-b2c0-e25e1fdafddb'></img>
//                                 </div>
//                             )
//                         }

//                     </Carousel.Item>
//                 </Carousel>
//             </div>
//         </div>
//     )
// }

// function calculateNumComponents() {
//     const screenWidth = window.innerWidth;
//     if (screenWidth <= 768) {
//         return 3
//     } else if (screenWidth <= 1200) {
//         return 5
//     } else {
//         return 7
//     }
// }

export default SubCategory
