import React from 'react';
import CardProduto from "./CardProduto";


// @ts-ignore
function Sobremesas({pedido,setPedido}) {
    // @ts-ignore
    return (
        <div id={"sobremesas"} className={` w-[100vw] flex flex-col justify-center items-center gap-5`}>
            <div className={` w-[80%] flex justify-self-start items-center py-5 mb-5 border-b-2 border-red-600`}>
                <h2 className={"text-4xl"}>Sobremesas</h2>
            </div>
            <CardProduto pedido={pedido} setPedido={setPedido} src={"/roll1.png"} titulo={"Roll Crocante de Nutella"} desc={"Uma deliciosa panqueca fina de chocolate, cuidadosamente enrolada para envolver um recheio irresistível de Nutella cremosa com flocos de milho crocantes, proporcionando uma combinação perfeita entre suavidade e textura a cada mordida. Cada fatia é finalizada com uma rodela fresca de morango, que traz um toque levemente ácido e refrescante, equilibrando a intensidade do chocolate.\n" +
                "\n" +
                "Para tornar a experiência ainda mais especial, o roll recebe um generoso fio de Nutella por cima e uma cobertura de Ovomaltine polvilhado, adicionando camadas extras de sabor e uma crocância marcante. Uma sobremesa surpreendente, feita para quem não abre mão de uma explosão de chocolate, cremosidade e contraste de texturas em cada pedaço."}></CardProduto>
        </div>
    );
}

export default Sobremesas;
