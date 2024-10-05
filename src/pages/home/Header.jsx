import React, { useContext, useState } from 'react';
import { Divider, Modal, Box } from '@mui/material';
import ICON from '../../util/Icon';
import Shopping from './Shopping';
import { PrivateContext } from '../../context/PrivateContext';
import WhatsAppButton from './WhatsAppButton';

export default function Header() {
    const { carrito, getCartDescriptionAndTotal } = useContext(PrivateContext);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const cantidad = carrito.length;

    return (
        <>
            {/* Header */}
            <div className='w-full flex justify-between items-center h-20 p-4 bg-gradient-to-r from-[#ffb6c1] to-[#ffe4e1] shadow-md px-4'>
                {/* Logo / Menu */}
                <div className='flex items-center gap-2'>
                    <span className='md:hidden text-gray-600 cursor-pointer'>
                        {ICON.menu}
                    </span>
                    <strong className='text-lg text-gray-700 tracking-wide'>Bisuteria PS</strong>
                </div>

                {/* Cart and Account Icons */}
                <div className='relative flex items-center gap-6'>
                    {/* Cart with Badge */}
                    <div className='relative cursor-pointer' onClick={handleOpenModal}>
                        <span className='text-gray-600'>{ICON.shoppingCar}</span>
                        {cantidad > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                {cantidad}
                            </span>
                        )}
                    </div>
                    <span className='text-gray-600 cursor-pointer'>{ICON.account}</span>
                </div>
            </div>

            {/* Divider */}
            <Divider />

            {/* Modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    className="
                    sm:w-11/12 sm:p-4 
                    md:w-9/12 md:p-6 
                    lg:w-7/12 lg:p-8 
                    xl:w-5/12 xl:p-10
                    bg-white border border-gray-200 shadow-xl rounded-lg"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {/* Cart Items */}
                    <div className='   h-[600px] overflow-y-auto'>
                        {carrito.length > 0 ? (
                            <ul>
                                {carrito.map((item, index) => (
                                    <Shopping key={index} item={item} index={index} />
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-600">No hay items en el carrito.</p>
                        )}
                    </div>

                    {/* WhatsApp Button */}
                    <div className='mt-6 flex justify-center'>
                        <WhatsAppButton message={getCartDescriptionAndTotal()} />
                    </div>
                </Box>
            </Modal>
        </>
    );
}
