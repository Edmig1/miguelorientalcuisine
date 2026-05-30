import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
interface ContatoProps {
    pedido: string[];
    setPedido: React.Dispatch<React.SetStateAction<string[]>>;
}
function Contato({pedido,setPedido}:ContatoProps) {
    const [mensagem, setMensagem] = useState('');

    const enviarEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            name: "Pedido: ",
            pedido: pedido
        };
        
        if(pedido.length !== 0){
            emailjs.send('service_1l8h2lr', 'template_z4rl9yk', templateParams, '92LAkfocnzUYNMbRc')
                .then((response) => {
                    alert(`Pedido Enviado Com Sucesso! Pedido: ${pedido}`);
                    setMensagem('');
                }, (error) => {
                    alert(`Erro: ${error}`);
                });
            setPedido([]);
        }else{
            alert("Coloque Algum Item no Carrinho Primeiro!")
        }
    };
    return (
        <form onSubmit={enviarEmail} className={"w-[80%] flex justify-center h-[10vh] "}>
            <button type="submit" className={"fixed bottom-5 right-5 md:w-[10%] w-[35%] h-[50px] text-white bg-red-600 px-5 py-3 rounded-xl hover:bg-red-700 transition"}>Enviar Pedido</button>
        </form>
    );
}
export default Contato;
