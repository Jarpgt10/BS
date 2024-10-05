import React from 'react';

const WhatsAppButton = ({ message }) => {
    const sendMessage = () => {
        const phoneNumber = '35971214'; // Número de teléfono (con código de país)
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Abre la URL en una nueva pestaña
        window.open(url, '_blank');
    };

    return (
        <button onClick={sendMessage} className=' bg-green-600 p-2 rounded-md text-white'>
            Enviar WhatsApp
        </button>
    );
};

export default WhatsAppButton;
