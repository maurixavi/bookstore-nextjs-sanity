import React, { useState } from 'react';
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { IoIosSearch } from "react-icons/io";
import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import { Search } from './';

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();
	const [showSearch, setShowSearch] = useState(false);

	return (
		<header className="sticky top-0 z-50 p-2 mb-4 border-b bg-white shadow-slate-100">
			<div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
				<Link href="/">
					<img
						src="../EntreLibrosLogo.png"
						alt=""
						width={180} 
						height={50} 
						className="object-contain" 
					/>
				</Link>

				<div className="flex items-center space-x-4">
					<button 
						type='button' 
						className='relative ' 
						onClick={() => setShowSearch(true)}>
						<IoIosSearch  size={24} />
					</button>

					{showSearch && <Search />}

					<button type='button' className='relative' onClick={() => setShowCart(true)}>
						<AiOutlineShopping size={24} />
						<span className='cart-item-qty absolute bottom-2 left-4 flex items-center justify-center w-4 h-4 text-[9px] font-semibold text-white bg-red-500 rounded-full'>{totalQuantities}</span>
					</button>
				</div>
				
				{showCart && <Cart />}
			</div>
		</header>
	)
}

export default Navbar