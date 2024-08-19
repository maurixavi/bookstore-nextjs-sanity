import React, { useRef } from 'react';
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineDelete } from "react-icons/ai";
import { useStateContext } from '../context/StateContext';
import { client, urlFor } from '../app/lib/client';

const Cart = () => {
	const cartRef = useRef();
  const { decQuantity, incQuantity, quantity, onAdd, onRemove, totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity } = useStateContext();

	return (
		<div className={`fixed inset-0 w-screen h-screen bg-black bg-opacity-50 z-[100] transition-all ease-in-out duration-1000`} ref={cartRef}>
  		<div className='relative w-[600px] h-full bg-white float-right p-[32px] pt-[10px]'>
				<div

					className='pt-4 flex items-center gap-2'
				>
					<span className='font-medium text-gray-600 tracking-tight'>Hay</span>
					<span className='font-medium tracking-tight'>{totalQuantities} artículo (s)</span>
					<span className='font-medium text-gray-600 tracking-tight'>en tu carrito</span>
					<button
						type='button'
						className='text-xl'
						onClick={() => setShowCart(false)}
					>
						<TiDeleteOutline />
					</button>
					
				</div>

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

				

				{cartItems.length >= 1 && (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto pr-1 mb-[2px]"> {/* espacio reservado para la sección fija */}
              {cartItems.map((item, index) => (
                <div
                  key={item._id || index}
                  className="flex items-start justify-between mb-4 mt-6"
                >
                  <img
                    src={urlFor(item?.image[0])}
                    className="w-22 h-28 object-cover ml-2 mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <a href={`/product/${item.slug.current}`} className="text-sm uppercase font-semibold tracking-tight">
                        {item.name}
                      </a>
                      <span className="flex items-center text-sm font-medium text-right mr-2">${item.price}
                        <span className="text-sm font-normal text-gray-600 "></span>
                        <button
                          type='button'
                          className="border-zinc-900 text-base ml-2 font-bold tracking-wide uppercase"
                          onClick={() => onRemove(item)}>
                          <AiOutlineDelete />
                        </button>
                      </span>
                    </div>
                    <div className="flex items-center mt-4 mb-2">
                      <p className="text-sm text-gray-600 mr-2 ">Cantidad: </p>
                      <span className="border border-gray-300 px-1 py-1 text-xs" onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className="border border-gray-300 px-2 text-sm">{item.quantity}</span>
                      <span className="border border-gray-300 px-1 py-1 text-xs" onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                        <AiOutlinePlus />
                      </span>
                    </div>
                    <span className='mb-4'>
                      <span className="text-sm text-gray-600 mr-2 ">Subtotal:</span><span className="text-sm text-gray-600 mr-2 ">${item.quantity * item.price} ({item.quantity} x ${item.price})</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 left-0 w-full border-t bg-white px-4 py-8">
              <div className="flex flex-col items-center">
                <span className='font-semibold'>Importe total: ${totalPrice}
                </span>
                <button
                  type='button'
                  className="border-2 border-zinc-900 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold py-2 px-6 tracking-wide mt-4 uppercase"
                  onClick={() => setShowCart(false)}>
                  Finalizar Compra
                </button>
                <button
                  type='button'
                  className='pt-4 flex items-center gap-1'
                  onClick={() => setShowCart(false)}
                >
                  <AiOutlineLeft className='text-sm font-medium text-gray-600' />
                  <span className='text-sm font-medium text-gray-600 '>Cerrar y continuar comprando</span>
                </button>
              </div>
            </div>
          </div>
        )}

		</div>
	</div>
	)
}

export default Cart