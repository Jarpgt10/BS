import React from 'react';
import Header from './Header';
import Filtro from './Filtro';
import Catalogo from './Catalogo';

export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 flex-grow p-4 overflow-hidden">

                {/* Filtro */}
                <div className="
                    md:col-span-1 
                    p-2
                    bg-white
                    rounded-md
                    shadow-lg
                    sm:h-auto
                    md:h-full
                    overflow-hidden
                ">
                    <Filtro />
                </div>

                {/* Catalogo */}
                <div className="
                    md:col-span-3 
                    p-2
                    bg-white
                    rounded-md
                    shadow-lg
                    overflow-y-auto
                    h-full
                ">
                    <Catalogo />
                </div>
            </div>
        </div>
    );
}
