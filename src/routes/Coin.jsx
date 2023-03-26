import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'


const Coin = () => {
    const params = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`
    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
            console.log(res.data[0])
        }) .catch((error) => {
            console.log(error)
        })
    }, [])
  return (
		<div className='bg-black text-white h-full py-5'>
			<div className='pt-5 border-4 border-gray-300 rounded-lg mx-[15%] h-full'>
				<div className='flex flex-col'>
					<div className='border-b-2 border-white pb-5'>
						<h1 className='text-2xl font-bold text-center bg-blue-400 rounded-lg mx-[39%]'>
							Rank: {coin.market_cap_rank}
						</h1>
					</div>
					<div className='py-3 border-b-2 border-white flex flex-row justify-center'>
						<h1 className='text-center text-3xl pr-10'>{coin.name}</h1>
						<div className='pl-4'>
							{coin.image ? <img src={coin.image.small} alt='' /> : null}
						</div>
					</div>
					<div className='py-3'>
						<div className='flex flex-row justify-evenly w-full border-b-2 border-white py-3'>
							<h3 className='text-xl font-semibold'>
								{coin.symbol ? <h3>{coin.symbol.toUpperCase()}/USD</h3> : null}
							</h3>
							<h3 className='text-2xl'>
								{coin.market_data?.current_price ? (
									<h1>
										${coin.market_data.current_price.usd.toLocaleString()}
									</h1>
								) : null}
							</h3>
						</div>
						<div className='border-b-2 border-white py-3 flex justify-center'>
							<table className='m-1'>
								<thead>
									<tr>
										<th className='px-3 bg-slate-400 rounded-l-lg'>1h</th>
										<th className='px-3 bg-slate-400'>24h</th>
										<th className='px-3 bg-slate-400'>7d</th>
										<th className='px-3 bg-slate-400'>14d</th>
										<th className='px-3 bg-slate-400'>30d</th>
										<th className='px-3 bg-slate-400 rounded-r-lg'>1yr</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='p-1 text-center'>
											{coin.market_data
												?.price_change_percentage_1h_in_currency ? (
												<p>
													{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
														1
													)}
													%
												</p>
											) : null}
										</td>
										<td className='p-1 text-center'>
											{coin.market_data
												?.price_change_percentage_24h_in_currency ? (
												<p>
													{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
														1
													)}
													%
												</p>
											) : null}
										</td>
										<td className='p-1 text-center'>
											{coin.market_data
												?.price_change_percentage_24h_in_currency ? (
												<p>
													{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
														1
													)}
													%
												</p>
											) : null}
										</td>
										<td className='p-1 text-center'>
											{coin.market_data
												?.price_change_percentage_24h_in_currency ? (
												<p>
													{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
														1
													)}
													%
												</p>
											) : null}
										</td>
										<td className='p-1 text-center'>
											{coin.market_data
												?.price_change_percentage_24h_in_currency ? (
												<p>
													{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
														1
													)}
													%
												</p>
											) : null}
										</td>
										<td className='p-1 text-center'>
											{coin.market_data
												?.price_change_percentage_24h_in_currency ? (
												<p>
													{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
														1
													)}
													%
												</p>
											) : null}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
                        <div className='py-3'>
							<h3 className='text-2xl text-center underline pb-3'>About</h3>
							<h3
                                className='mx-4'
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(
										coin.description ? coin.description.en : ""
									),
								}}
							></h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Coin