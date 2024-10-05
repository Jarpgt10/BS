import React, { useContext, useState } from 'react';
import { Rating, Typography, Button } from '@mui/material';
import { PrivateContext } from '../../context/PrivateContext';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Card from './Card';

export default function Catalogo() {
    const { filtroProducto } = useContext(PrivateContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filtroProducto.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(filtroProducto.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            {/* Contenedor de Productos */}
            <div className="flex flex-wrap gap-5 justify-center">
                {!currentProducts.length > 0 ? (
                    <div className="flex flex-col items-center justify-center w-full mt-10">
                        <SentimentVeryDissatisfiedIcon style={{ fontSize: 80, color: '#969391' }} />
                        <Typography variant="h6" color="textSecondary" className="mt-3">
                            No hay productos disponibles
                        </Typography>
                    </div>
                ) : (
                    currentProducts.map((item, index) => (
                        <Card
                            key={item.id}
                            url_img={item.url_img}
                            name={item.name}
                            precio={item.precio}
                            obj={item}
                            className="transition-transform duration-200 hover:scale-105" // Efecto de hover
                        />
                    ))
                )}
            </div>

            {/* Paginación */}
            {filtroProducto.length > itemsPerPage && (
                <div className="flex justify-center mt-8">
                    <ul className="flex list-none gap-3">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index}>
                                <Button
                                    variant={currentPage === index + 1 ? 'contained' : 'outlined'}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-[#fecafe] text-white' : 'text-gray-600'}`}
                                >
                                    {index + 1}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
