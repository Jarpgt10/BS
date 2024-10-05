import React, { useContext } from 'react';
import ICON from '../../util/Icon';
import { Divider, Slider } from '@mui/material';
import { PrivateContext } from '../../context/PrivateContext';

export default function Filtro() {
    const { FilterFunctions } = useContext(PrivateContext);

    const handleChange = (event, precio) => {
        FilterFunctions.precio(precio);
    };

    return (
        <>
            <div className='m-5 p-5 bg-white rounded-lg border-2 border-[#fecafe] shadow-sm transition-all duration-300 sm:w-[90%] md:w-[80%] lg:w-[70%] hover:shadow-md'>
                <div className='flex justify-between items-center text-gray-600 pb-3'>
                    <strong className='text-lg font-medium'>Filtro</strong>
                    <span className='text-gray-500'>{ICON.filter}</span>
                </div>
                <Divider />
                <div className='text-gray-600 py-4'>
                    <span className='block mb-2 text-sm font-semibold'>Precio</span>
                    <div className='flex justify-center items-center gap-4'>
                        <Slider
                            defaultValue={25}
                            onChange={handleChange}
                            aria-label="Precio"
                            valueLabelDisplay="auto"
                            max={100}
                            className="text-pink-500" // Cambia el color del Slider
                        />
                        <span className="text-gray-700 font-semibold">100</span>
                    </div>
                </div>
            </div>
        </>
    );
}
