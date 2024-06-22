import Link from 'next/link'

const Navbar = () => {
	return (
		<header className="p-2 mb-4 border-b">
			<div className='flex items-center px-4'>
				<Link href="/">
					<h1 className='text-xl font-bold'>Book<span className='text-primary font-semibold'>Store</span></h1>
				</Link>
			</div>
		</header>
	)
}

export default Navbar