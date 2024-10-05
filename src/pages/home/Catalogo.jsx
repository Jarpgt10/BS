import React, { useContext, useState } from 'react';
import { Rating, Typography, Button } from '@mui/material';
import { PrivateContext } from '../../context/PrivateContext';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'; // Icono para "no hay productos"
import Card from './Card';

export default function Catalogo() {
    const { filtroProducto } = useContext(PrivateContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Calcula el índice de los productos que se deben mostrar en la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filtroProducto.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(filtroProducto.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-5">
            <div className="flex flex-wrap gap-5 sm:justify-center md:justify-start">
                {!currentProducts.length > 0 ? (
                    <div className="flex flex-col items-center justify-center w-full">
                        <SentimentVeryDissatisfiedIcon style={{ fontSize: 80, color: '#969391' }} />
                        <Typography variant="h6" color="textSecondary" className="mt-3">
                            No hay productos disponibles
                        </Typography>
                    </div>
                ) : (
                    currentProducts.map((item, index) => (

                        <Card key={item.id} url_img={item.url_img} name={item.name} precio={item.precio} obj={item} />

                    ))
                )}
            </div>

            {/* Paginación */}
            {filtroProducto.length > itemsPerPage && (
                <div className="flex justify-center mt-5">
                    <ul className="flex list-none gap-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index}>
                                <Button
                                    variant={currentPage === index + 1 ? 'contained' : 'outlined'}
                                    onClick={() => handlePageChange(index + 1)}
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
