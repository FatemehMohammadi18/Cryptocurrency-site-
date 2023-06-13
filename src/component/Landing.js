import React, { useEffect, useState } from "react";
// API
import { getCoin } from "../services/api";
// GIF
import { Loadeing } from "./Loading";
//Component
import { Coin } from "./Coin";
const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect (() => {
        const fetchAPI = async () => {
        const data = await getCoin();
        console.log(data);
        setCoins(data)
        }
        fetchAPI();
    }, [])
    const  searchHandler = event => {
        setSearch(event.target.value)
    }
    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>  
            <input 
            type="text" onChange={searchHandler} placeholder="Search here"
            className=" w-1/2 h-6 m-10 bg-zinc-900 hover:bg-zinc-800 rounded-full border border-purple-900
            outline-none transition-all duration-150 ease-in px-8 py-6 font-bold text-xl text-white"
            />
            {
                coins.length ?
            <div className=" flex flex-wrap justify-center p-5">
                {
                    searchedCoins.map(coin => <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    price={coin.current_price}
                                    marketCap={coin.market_cap}  
                                    priceChange={coin.price_change_24h}  
                                />)
                }
            </div> :

            <Loadeing />
              
            }
        </>
    )
} 

export default Landing;