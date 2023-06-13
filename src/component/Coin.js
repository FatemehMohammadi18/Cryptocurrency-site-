import React from 'react';

const Coin = ({name, image, symbol, price, marketCap, priceChange}) => {
    return (
        <div className=' bg-zinc-900 hover:bg-zinc-800 p-10 m-2 hover:m-0 rounded-sm border-none hover:border border-purple-800
          transition-all duration-100 ease-linear shadow-sm shadow-zinc-700'>
            <img src={image} alt={name}
            className=" w-9 rounded-full ml-3" />
                <div className=' w-40 p-4 cursor-pointer'>
                    <span className='font-semibold text-s text-purple-800'>{name}</span>
                    <br />
                    <span className='ffont-medium text-xs text-white'>{symbol.toUpperCase()}</span>
                    <br />
                    <span className='font-medium text-xs text-white'>$ {price.toLocaleString()}</span>
                    <br />
                    <span className={priceChange < 0 ? 'font-bold p-1 text-xs text-red-500' : 'font-bold text-xs text-green-700'}>{priceChange.toFixed(2)}</span>
                    <br />
                    <span className='font-medium text-xs text-white'>$ {marketCap.toLocaleString()}</span>
                </div>

        </div>
    )
}

export { Coin };