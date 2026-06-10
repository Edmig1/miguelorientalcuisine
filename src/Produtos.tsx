import React, {useState} from 'react';
import Entradas from "./Entradas";
import Principais from "./Principais";
import Sobremesas from "./Sobremesas";
import Bebidas from "./Bebidas";
import Contato from "./Contato";


// @ts-ignore
function Produtos() {
    const [pedido, setPedido] = useState<string[]>([]);
    return (
        <div className={` w-[100vw] flex flex-col gap-20 justify-center items-center pt-10 `}>
            <Entradas pedido={pedido} setPedido={setPedido}></Entradas>
            <Principais pedido={pedido} setPedido={setPedido}></Principais>
            <Sobremesas pedido={pedido} setPedido={setPedido}></Sobremesas>
            <Bebidas pedido={pedido} setPedido={setPedido}></Bebidas>
            <Contato pedido={pedido} setPedido={setPedido}></Contato>
        </div>
    );
}

export default Produtos;
