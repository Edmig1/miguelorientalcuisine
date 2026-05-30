import React from 'react';


// @ts-ignore
function CardProduto({src,titulo,desc,pedido,setPedido}) {
    function add(){
        const novoPedido = [...pedido, titulo];
        setPedido(novoPedido);
        console.log(novoPedido);
    }
    return (
        <div className={` w-[80%] h-fit flex justify-between bg-gray-200 p-5 rounded-xl`}>
            <div className={"lg:flex gap-5"}>
                <img className={"md:w-[20%] w-[100%] h-[300px] md:h-[100%] rounded-xl"} src={`${src}`} alt=""/>
                <div className={"flex flex-col gap-4"}>
                    <h4 className={"text-3xl"}>{titulo}</h4>
                    <p>{desc}</p>
                    <button onClick={add} className={"text-white bg-red-600 px-5 py-3 rounded-xl hover:bg-red-700 transition"}>Adicionar</button>
                </div>
            </div>
        </div>
    );
}

export default CardProduto;
