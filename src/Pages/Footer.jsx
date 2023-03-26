import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
		<div>
			<div className='flex flex-row justify-between px-5 py-1'>
				<Link to='FAQ'>
					<h2 className='hover:underline'>
            FAQ
          </h2>
				</Link>
        <Link to='/'>
          <h2 className='hover:underline'>
            Cryptocurrency.io
          </h2>  
        </Link>
				<Link to='About'>
          <h2 className='hover:underline'>
            About
          </h2>  
        </Link>
			</div>
		</div>
	);
}

export default Footer