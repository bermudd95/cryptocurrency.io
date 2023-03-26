import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'

const Coins = (props) => {
  return (
		<div className='bg-black text-white p-5'>
			<div className='flex flex-row justify-between px-5'>
				<h1>Rank</h1>
				<h1>Name</h1>
				<h1>Symbol</h1>
				<h1>Price</h1>
				<h1>Price Change</h1>
				<h1>Total Volume</h1>
				<h1>Market Cap</h1>
			</div>
			{props.coins.map((coins) => {
				return (
					<Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
						<CoinItem coins={coins} />
					</Link>
				);
			})}
		</div>
	);
}

export default Coins