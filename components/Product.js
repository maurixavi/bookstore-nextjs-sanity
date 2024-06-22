import React from 'react';
import Link from 'next/link';

import { urlFor } from '../app/lib/client'

const Product = ({ product: { image, name, slug, price} }) => {
	return (
		<div className="product-card">
			<Link href={`/product/${slug.current}`}>
				<div className='p-15'>
				 	<img className='product-image'
						src={urlFor(image && image[0])} 
					/>
				</div>
				<div className="product-info">
					<p className="product-name pt-2 leading-tight">{name}</p>
					<p className='font-light text-xs pt-1 pb-2'>Gabriel García Marquez</p>
					<p className="product-price text-base font-medium">${price}</p>
				</div>
			</Link>
			
		</div>
	)
}

export default Product
