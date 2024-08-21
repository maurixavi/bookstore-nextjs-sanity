import React from 'react';
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Navbar from './Navbar'

export const metadata = {
	title: "EntreLibros - Tienda Virtual"
}

const Layout = ({ children }) => {
	return (
		<div>
      <Navbar />
      {children}
    </div>
	)
}

export default Layout