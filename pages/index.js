import React, { useState } from 'react';
import '../app/globals.css'
import { Navbar, Product } from '../components'
import { client } from '../app/lib/client'
import { Search } from './';

const Home = ({ products }) => {
	const [phrase, setPhrase] = useState('');

	const normalizeText = (text) => {
		return text
			.normalize('NFD') //descompone caracteres acentuados en sus partes base
			.replace(/[\u0300-\u036f]/g, '') // Remove accents
			.toLowerCase(); 
	}

	const filteredProducts = products.filter(product => {
    const searchPhrase = normalizeText(phrase);

    // Match only from the start
    const nameMatch = normalizeText(product.name).startsWith(searchPhrase);
    const genreMatch = product.genres
      .some(genre => normalizeText(genre).startsWith(searchPhrase));
    const subgenreMatch = product.subgenres
      .some(subgenre => normalizeText(subgenre).startsWith(searchPhrase));

    const authorMatch = product.author
      .split(' ')
      .some(word => normalizeText(word).includes(searchPhrase));

    return nameMatch || genreMatch || subgenreMatch || authorMatch;
  });

	return (
		<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className=''>
					<input
						type="text"
						placeholder='Buscar por título, autor, género o tematica...'
						className='bg-gray-100 w-full px-4 py-2 outline-none text-sm mt-2 mb-2'
						value={phrase}
						onChange={(e) => setPhrase(e.target.value)}
					/>
					<h2 className='text-xl font-semibold'></h2>

					<div className='product-grid py-4'>
						{filteredProducts?.map((product) => 
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