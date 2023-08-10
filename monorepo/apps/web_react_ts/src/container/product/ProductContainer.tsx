import React from 'react'
import { ProductDescription, ProductImage } from '../../components'
import './product_container.css'

const ProductContainer = () => {
    return (
        <div className='product_container'>
            <ProductImage />
            <ProductDescription />
        </div>
    )
}

export default ProductContainer
