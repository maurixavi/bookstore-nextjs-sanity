import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import { AiOutlineShopping } from 'react-icons/ai'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
        <title>EntreLibros - Tienda Virtual</title>
      </Head>
      <Navbar />
      {children}
    </div>
	)
}

export default Layout