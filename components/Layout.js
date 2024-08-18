import React from 'react';
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<div>
      <Navbar />
      {children}
    </div>
	)
}

export default Layout