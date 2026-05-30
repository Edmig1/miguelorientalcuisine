import React from 'react';
import LinkHeader from "./LinkHeader";


// @ts-ignore
function Header({setIsOpen}) {
    function abre(){
        setIsOpen(true)
    }
    return (
        <div className={` h-[10%] w-[100vw] flex md:justify-center justify-end items-center`}>
            <nav className={"md:flex hidden w-[50%] md:justify-evenly pt-4 border-b-2 py-4"}>
                <LinkHeader href={"#entradas"} texto={"Entradas"} setIsOpen={setIsOpen} />
                <LinkHeader href={"#principais"} texto={"Principais"} setIsOpen={setIsOpen} />
                <LinkHeader href={"#sobremesas"} texto={"Sobremesas"} setIsOpen={setIsOpen} />
                <LinkHeader href={"#bebidas"} texto={"Bebidas"} setIsOpen={setIsOpen} />
            </nav>
            <button onClick={abre} className={"text-white flex md:hidden pr-10 w-fit"}>
                <img className={"h-8 w-8"} src={process.env.PUBLIC_URL +  '/menu-icon.png'} alt=""/>
            </button>
        </div>
    );
}

export default Header;
