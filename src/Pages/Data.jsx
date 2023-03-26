import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coins from './Coin'

const Data = () => {
    const [coins, setCoins] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'
    useEffect(() => {
        axios.get(url).then((res) => {
            setCoins(res.data)
            console.log(res.data[0])
        }) .catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <>
            <Coins coins={coins} />
        </>
    )
}

export default Data;