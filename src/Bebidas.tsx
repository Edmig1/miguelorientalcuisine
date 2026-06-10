import React from 'react';
import CardProduto from "./CardProduto";


// @ts-ignore
function Bebidas({pedido,setPedido}) {
    // @ts-ignore
    return (
        <div id={"bebidas"} className={` w-[100vw] flex flex-col justify-center items-center gap-5`}>
            <div className={` w-[80%] flex justify-self-start items-center py-5 mb-5 border-b-2 border-red-600`}>
                <h2 className={"text-4xl"}>Bebidas</h2>
            </div>
            <CardProduto pedido={pedido} setPedido={setPedido} src={`${process.env.PUBLIC_URL}/sprite.webp`} titulo={"Sprite Zero"} desc={"Leve, refrescante e com o marcante sabor de limão, a Sprite Zero é a escolha ideal para quem busca uma bebida sem açúcar, mas sem abrir mão do frescor e da sensação revigorante que só ela proporciona."}></CardProduto>
            <CardProduto pedido={pedido} setPedido={setPedido} src={`${process.env.PUBLIC_URL}/pepsi.jpg`} titulo={"Pepsi Black"} desc={"O sabor clássico e inconfundível da Pepsi, agora sem adição de açúcar. Refrescante, equilibrada e perfeita para acompanhar qualquer refeição, oferecendo toda a experiência da tradicional Pepsi Black."}></CardProduto>
        </div>
    );
}

export default Bebidas;
