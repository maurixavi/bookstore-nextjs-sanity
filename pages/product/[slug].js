import React from 'react';
import '../../app/globals.css';
import { Navbar, Product } from '../../components';

import { client, urlFor } from '../../app/lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';

import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {

  const { decQuantity, incQuantity, quantity, onAdd } = useStateContext();
  console.log({ decQuantity, incQuantity, quantity });

  return (
    <div>
      
      <div className="flex justify-center mt-6">
        <div className="bg-white max-w-6xl  flex mx-4">
          <div className="p-6 flex-shrink-0">
            <img
              className="w-64 object-cover"
              src={urlFor(product.image && product.image[0])}
              alt={product.name}
            />
          </div>
          <div className="w-4/5 p-4 flex flex-col items-start">
            <h1 className="text-2xl font-bold tracking-tight uppercase">{product.name}</h1>
						<h1 className="mb-4 font-light uppercase tracking-tight">{product.author}</h1>
            <p className="text-2xl font-extrabold text-gray-700 mb-4 text-red-800">${product.price}</p>
            <p className="text-gray-700 text-sm font-light mb-4">{product.description}</p>
						<div className="flex items-center mt-4">
              <span className="border border-gray-300 px-1 py-1" onClick={decQuantity}>
                <AiOutlineMinus />
              </span>
              <span className="border border-gray-300 px-2">{quantity}</span>
              <span className="border border-gray-300 px-1 py-1" onClick={incQuantity}>
                <AiOutlinePlus />
              </span>
							<div className="mx-4">
							<button 
                class="border-2 border-zinc-900 hover:bg-neutral-50 border-2 text-xs font-semibold py-2 px-4 tracking-wide mx-4"
                onClick={() => onAdd(product, quantity)}>
							  AGREGAR
							</button>
							<button 
                class="border-2 border-zinc-900 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold py-2 px-4 tracking-wide">
							  COMPRAR
							</button>
						</div>
            </div>
						
          </div>
					
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
	const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
	const products = await client.fetch(productsQuery);
	

  return {
    props: { product, products },
  };
};

export default ProductDetails;
