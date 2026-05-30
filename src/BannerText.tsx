import React from 'react';
import css from "./BannerText.module.css"

function BannerText() {
    return (
        <div className={` w-[100vw] h-[90%] flex justify-center items-center`}>
            <div className={` md:w-[50%] w-[80%] flex flex-col justify-center items-center text-white text-center gap-10`}>
                <h1 className={`${css.titulo} md:text-3xl lg:text-6xl text-2xl`}>Miguel Oriental Cuisine</h1>
                <p>Bem-vindo ao Miguel Oriental Cuisine, aqui você tem a melhor experiência gastronômica oriental de toda a região.
                    Combinamos ingredientes selecionados, receitas tradicionais e um toque de inovação para oferecer pratos que encantam tanto os olhos quanto o paladar. Do sushi fresco aos pratos quentes preparados com excelência, cada detalhe é pensado para proporcionar uma experiência única e memorável.</p>
            </div>
        </div>
    );
}

export default BannerText;
