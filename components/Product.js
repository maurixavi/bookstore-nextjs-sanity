import React from 'react';
import Link from 'next/link';

import { urlFor } from '../app/lib/client'

const Product = ({ product: { image, name, author, slug, price} }) => {
  return (
    <div className="product-card mx-auto">
      <Link href={`/product/${slug.current}`}>
        <div className='p-15'>
          <img className='product-image'
            src={urlFor(image && image[0])} 
          />
        </div>
        <div className="product-info flex flex-col items-center justify-center text-center">
					<p className="product-name text-sm font-semibold pt-2 leading-tight uppercase">{name}</p>
          <p className='font-light text-xs pt-1 pb-2 uppercase'>{author}</p>
          <p className="product-price text-base font-bold pb-4 text-red-800">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product