import React from 'react';
import CardProduto from "./CardProduto";


// @ts-ignore
function Entradas({pedido,setPedido}) {
    // @ts-ignore
    return (
        <div id={"entradas"} className={` w-[100vw] flex flex-col justify-center items-center`}>
            <div className={` w-[80%] flex justify-self-start items-center py-5 mb-5 border-b-2 border-red-600`}>
                <h2 className={"text-4xl"}>Entradas</h2>
            </div>
            <CardProduto pedido={pedido} setPedido={setPedido} src={`${process.env.PUBLIC_URL}/hotroll.webp`} titulo={"Hot Roll"} desc={"Uma combinação irresistível de salmão, cream cheese e arroz envoltos em alga e empanados em massa leve e crocante. Fritos até atingirem o ponto perfeito, os Hot Rolls oferecem uma textura dourada por fora e cremosa por dentro, proporcionando uma explosão de sabores a cada mordida. A harmonia entre os ingredientes cria uma experiência única, ideal para quem aprecia sabores marcantes e um toque especial da culinária oriental."}></CardProduto>
        </div>
    );
}

export default Entradas;
