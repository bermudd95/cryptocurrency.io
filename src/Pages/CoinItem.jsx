import React from 'react'

const CoinItem = (props) => { 
  return (
		<div className='p-4 bg-black text-white'>
			<div className='flex flex-row justify-between items-center hover:bg-gray-100 hover:text-black border-2 border-white rounded-lg py-2 px-5'>
				<div>
                   <p className='text-xl'>{props.coins.market_cap_rank}</p> 
                </div>
                <div className='px-10 text-center'>
                   <p className='text-xl'>{props.coins.symbol.toUpperCase()}</p> 
                </div>
				<div className='px-14'>
					<img className='w-[40px]' src={props.coins.image} alt='' />
				</div>
                <div>
                  <p className='text-xl'>${props.coins.current_price}</p>  
                </div>
				<div>
                  <p className='text-xl'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>  
                </div>
				<div>
                  <p className='text-xl'>${props.coins.total_volume.toLocaleString()}</p>  
                </div>
				<div>
                  <p className='text-xl'>${props.coins.market_cap.toLocaleString()}</p>  
                </div>
			</div>
		</div>
	);
}

export default CoinItem