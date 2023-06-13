import React from "react";


const Loadeing = () => {
    return (
        <div className="flex flex-col justify-center mt-6">
            <div class="loader"
            className=" w-20 h-20 flex justify-center items-center bg-purple-500 rounded-full border-t-8 
            border-t-purple-700 animate-spin duration-all ease-linear">
                <div 
                className=" w-16 h-16 bg-zinc-950 rounded-full"></div>
            </div>
            <h1 className=" text-white text-center font-black mt-3">Loading...</h1>
        </div>
    )
}

export {Loadeing}