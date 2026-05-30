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
            <CardProduto pedido={pedido} setPedido={setPedido} src={"/guioza.jpg"} titulo={"Guioza"} desc={"Delicados pastéis orientais recheados com carne suculenta e legumes frescos, envoltos em uma fina massa artesanal. Grelhados até ficarem dourados e levemente crocantes por fora, mantendo um recheio macio e saboroso por dentro. Servidos com molho especial à base de shoyu para uma experiência autêntica da culinária japonesa."}></CardProduto>
        </div>
    );
}

export default Entradas;
