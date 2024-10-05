import React from 'react';
import Header from './Header';
import Filtro from './Filtro';
import Catalogo from './Catalogo';

export default function Home() {
    return (
        <div className="w-screen h-screen">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:h-[750px] sm:h-[90%]  p-4">
                {/* Filtro */}
                <div className="
                    sm:col-span-5
                    md:col-span-1 
                    lg:col-span-1 
                    p-2
                ">
                    <Filtro />
                </div>

                {/* Catalogo */}
                <div className="
                    col-span-4 
                    md:col-span-3 
                    lg:col-span-3 
                    sm:h-[80%]
                    md:h-[650px] 
                    overflow-y-auto 
                    p-2
                ">
                    <Catalogo />
                </div>
            </div>
        </div>
    );
}
