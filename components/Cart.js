import React, { useRef } from 'react';
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import { client, urlFor } from '../app/lib/client';

const Cart = () => {
	const cartRef = useRef();
  const { decQuantity, incQuantity, quantity, onAdd, totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity } = useStateContext();

	return (
		<div className={`fixed inset-0 w-screen h-screen bg-black bg-opacity-50 z-[100] transition-all ease-in-out duration-1000`} ref={cartRef}>
  		<div className='relative w-[600px] h-full bg-white float-right p-[32px] pt-[10px]'>
				<button
					type='button'
					className='pt-4 flex items-center gap-2'
					onClick={() => setShowCart(false)}
				>
					<AiOutlineLeft />
					<span className='font-semibold text-gray-600'>Hay</span>
					<span className='font-semibold'>{totalQuantities} artículos (s)</span>
					<span className='font-semibold text-gray-600'>en tu carrito</span>
				</button>

				{cartItems.length < 1 && (
      	<div className="flex flex-col items-center  h-full space-y-4">
        	<AiOutlineShopping size={150} className="text-gray-700 mt-8 " />
        	<h3 className="text-base font-semibold text-gray-700 mt-16">Tu carrito está vacio, agrega tus libros favoritos!</h3>
        		<Link href="/">
							<button 
								type='button'
								class="border-2 border-zinc-900 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold py-2 px-6 tracking-wide mt-8 uppercase"
								onClick={() => setShowCart(false)}>
									Continuar Comprando
							</button>
						</Link>
					</div>
				)}

				

			<div>
				{cartItems.length >= 1 && 
					cartItems.map((item, index) => (
						<div 
							key={item._id}
							className="flex items-start justify-between border-b pb-4 mb-4 mt-6"
						>
						<img 
							src={urlFor(item?.image[0])} 
							alt={item.name} 
							className="w-22 h-28 object-cover mr-4"
						/>
						<div className="flex-1">
							<div className="flex justify-between">
								<a  href={`/product/${item.slug.current}`} className="text-sm uppercase font-semibold tracking-tight"> 
									{item.name} ({item.author})
								</a>
            		<span className="text-sm font-medium text-right">${item.price} 
									<span className="text-sm font-normal text-gray-600 "> (Unidad) </span>
									<button 
										type='button'
										class=" border-zinc-900s   text-lg font-bold  tracking-wide  uppercase"
										onClick={() => setShowCart(false)}>
											<TiDeleteOutline/>
									</button>
								</span>
          		</div>
							<div className="flex items-center mt-4">
								<p className="text-sm text-gray-600 mr-2">Cantidad: </p>
								<span className="border border-gray-300 px-1 py-1 text-xs" onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
									<AiOutlineMinus/>
								</span>
								<span className="border border-gray-300 px-2 text-sm">{item.quantity}</span>
								<span className="border border-gray-300 px-1 py-1 text-xs" onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
									<AiOutlinePlus/>
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			{cartItems.length >= 1 && (
				<div className="flex flex-col items-center">
					<span className='font-semibold text-gray-700'>Importe total: ${totalPrice}
					</span>
					<button 
						type='button'
						class="border-2 border-zinc-900 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold py-2 px-6 tracking-wide mt-4 uppercase"
						onClick={() => setShowCart(false)}>
							Finalizar Compra
					</button>
				</div>
			)}

		</div>
	</div>
	)
}

export default Cart