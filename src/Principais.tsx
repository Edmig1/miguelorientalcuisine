import React from 'react';
import CardProduto from "./CardProduto";


// @ts-ignore
function Principais({pedido,setPedido}) {
    // @ts-ignore
    return (
        <div id={"principais"} className={` w-[100vw] flex flex-col justify-center items-center gap-5`}>
            <div className={` w-[80%] flex justify-self-start items-center py-5 mb-5 border-b-2 border-red-600`}>
                <h2 className={"text-4xl"}>Principais</h2>
            </div>
            <CardProduto pedido={pedido} setPedido={setPedido} src={`${process.env.PUBLIC_URL}/yaki.jpg`} titulo={"Yakissoba"} desc={"Macarrão oriental salteado na wok com tiras macias de carne bovina, legumes frescos e um molho especial à base de shoyu que realça cada ingrediente. Preparado na hora, combina sabores intensos e texturas equilibradas, unindo a suculência da carne à leve crocância dos vegetais. Um prato tradicional, aromático e perfeito para quem busca uma refeição completa e cheia de sabor."}></CardProduto>

        </div>
    );
}

export default Principais;
