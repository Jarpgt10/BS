import React, { useContext, useState } from 'react';
import { Divider, Icon, Modal, Box } from '@mui/material';
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
            <div className='w-full flex justify-between items-center h-14 bg-[#fecafe]  ' >
                <div className='icon-hover'>
                    <span className='md:hidden'>
                        {ICON.menu}
                    </span>
                    <strong>Bisuteria PS</strong>
                </div>
                <div className='flex gap-3'>
                    <div className='absolute   bg-red-800 rounded-full z-50 px-1 text-xs text-white '>
                        {cantidad}
                    </div>
                    <span className='icon-hover' onClick={handleOpenModal}>
                        {ICON.shoppingCar}
                    </span>
                    <span className='icon-hover'>{ICON.account}</span>
                </div>
            </div>
            <div>
                <Divider />
            </div>

            {/* Modal de Material-UI */}
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
            bg-white border border-gray-300 shadow-lg rounded-lg"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}

                >
                    <div>
                        {carrito.length > 0 && (
                            <ul>
                                {carrito.map((item, index) => (
                                    <Shopping index={index} item={item} /> // Pasa el índice al componente
                                ))}
                            </ul>
                        )}
                        {carrito.length === 0 && <p>No hay items en el carrito.</p>}
                    </div>

                    <div className='flex justify-center items-center'>
                        <WhatsAppButton message={getCartDescriptionAndTotal()} />
                    </div>

                </Box>
            </Modal>
        </>
    );
}
