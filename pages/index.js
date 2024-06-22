import React from 'react'
import '../app/globals.css'
import { Navbar, Product } from '../components'
import { client } from '../app/lib/client'

const Home = ({ products }) => {
	return (
		<div>
			<Navbar />

			<div className='px-8'>
				<h2 className='text-xl font-semibold'>Más Vendidos</h2>
				<div className='product-grid py-4'>
					{products?.map((product) => 
						<Product 
							key={product._id} 
							product={product} 
						/>)
					}
				</div>
			</div>
		</div>
	)
}

export const getServerSideProps = async() => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	return {
		props: { products }
	}
}

export default Home;