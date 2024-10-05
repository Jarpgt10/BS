import React, { createContext, useState } from "react";
import Joyeria from "../data/Joyeria";

export const PrivateContext = createContext();

export const PrivateState = (props) => {
    const [filtroProducto, setFiltroProducto] = useState([]);
    const [carrito, setCarrito] = useState([]);


    const FilterFunctions = {
        precio: (payload) => filtroPrecio(payload),
    };

    const filtroPrecio = (precio) => {
        const items = Joyeria.filter((item) => item.precio <= precio);
        setFiltroProducto(items);
    };

    const addToCart = (item) => {
        setCarrito([...carrito, item]);
    };

    const removeFromCart = (index) => {
        setCarrito(carrito.filter((_, i) => i !== index));
    };

    // Función para generar la descripción y sumar precios en un solo string con saltos de línea
    const getCartDescriptionAndTotal = () => {
        const description = carrito
            .map(item => `${item.name} (Precio: Q${item.precio})`)
            .join("\n");  // Usamos '\n' para saltos de línea

        const total = carrito.reduce((acc, item) => acc + item.precio, 0);

        // Retorna todo en un solo string
        return `${description}\n\nTotal: Q${total}`;
    };


    return (
        <PrivateContext.Provider
            value={{
                filtroProducto,
                carrito,
                addToCart,
                removeFromCart,
                FilterFunctions,
                getCartDescriptionAndTotal, // Exportamos la función
            }}
        >
            {props.children}
        </PrivateContext.Provider>
    );
};
