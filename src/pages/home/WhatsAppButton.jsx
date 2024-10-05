import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = ({ message }) => {
    const sendMessage = () => {
        const phoneNumber = '35971214'; // Número de teléfono con código de país
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Abre la URL en una nueva pestaña
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={sendMessage}
            className='
                flex items-center justify-center gap-2
                bg-gradient-to-r from-green-500 to-green-700 
                hover:from-green-600 hover:to-green-800
                transition-all duration-300 
                p-3 rounded-lg text-white 
                shadow-md hover:shadow-lg 
                text-sm sm:text-base lg:text-lg
            '
        >
            <span className="hidden sm:inline">Enviar WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
            <WhatsAppIcon className="text-white text-xl" />
        </button>
    );
};

export default WhatsAppButton;
