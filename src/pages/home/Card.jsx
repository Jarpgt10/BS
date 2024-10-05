import React, { useContext } from 'react'
import ICON from '../../util/Icon'
import { PrivateContext } from '../../context/PrivateContext'

export default function Card({ key, url_img, name, precio, obj }) {

    const { addToCart } = useContext(PrivateContext);
    return (
        <div key={key} className="flex flex-col justify-center items-center bg-[#fecafe] text-white w-full 
                            sm:w-[80%] 
                            md:w-[45%] 
                            lg:w-[30%] 
                            xl:w-[25%] rounded-lg p-4 shadow-lg relative">
            <img
                src={url_img}
                alt={name}
                className="w-full h-auto max-h-[200px] object-contain rounded-md mb-3"
            />
            <strong className="block text-center text-base lg:text-lg mb-2">{name}</strong>
            <div className="flex items-center justify-center mb-3">
                <span className="text-lg font-bold">Q{precio}</span>
            </div>
            <div className="flex items-center justify-center mb-3 icon-hover">
                <button onClick={() => addToCart(obj)}>
                    {ICON.shoppingCar}
                </button>
            </div>
        </div>
    )
}
