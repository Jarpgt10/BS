import React, { useContext } from 'react';
import { PrivateContext } from '../../context/PrivateContext';

export default function Shopping({ item, index }) {
    const { removeFromCart } = useContext(PrivateContext);

    const handleDelete = () => {
        removeFromCart(index);
    };

    return (
        <div className="flex flex-row items-center bg-[#f0eeed] w-full m-2
            sm:w-[90%] 
            md:w-[80%] 
            lg:w-[70%] 
            xl:w-[60%] rounded-lg p-2 shadow-md relative">

            <img
                src={item.url_img}
                alt={item.name}
                className="w-[80px] h-[80px] object-cover rounded-md mr-3"
            />

            <div className="flex flex-col justify-between flex-1">
                <strong className="text-sm md:text-base lg:text-lg mb-1">{item.name}</strong>
                <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-bold">Q{item.precio}</span>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm md:text-base"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}
