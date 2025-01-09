import React from 'react'
import { useRouter } from 'next/router'


const Product = () => {
    let router = useRouter(),
        { slug } = router.query;

    return (
        <div>
            {slug}
        </div>
    )
}

export default Product;
