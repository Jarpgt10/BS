import React, { useContext } from 'react';
import ICON from '../../util/Icon';
import { Divider, Slider } from '@mui/material';
import { PrivateContext } from '../../context/PrivateContext';

export default function Filtro() {
    const { FilterFunctions } = useContext(PrivateContext);

    const handleChange = (event, precio) => {
        FilterFunctions.precio(precio)
    };

    return (
        <>
            <div className='m-5 p-5  rounded-md border-2 border-[#fecafe]   sm:w-[80%] w-[70%]'>
                <div className='flex justify-between text-gray-600 py-3'>
                    <strong>Filtro</strong>
                    {ICON.filter}
                </div>
                <Divider />
                <div className='text-gray-600 py-3'>
                    <span>Precio</span>
                    <div className='flex justify-center items-center gap-5'>
                        <Slider
                            defaultValue={50}
                            onChange={handleChange}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            max={50}
                        />
                        50
                    </div>
                </div>
            </div>
        </>
    );
}
