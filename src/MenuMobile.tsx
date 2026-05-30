import LinkHeader from "./LinkHeader";
import React from "react";


// @ts-ignore
function MenuMobile({isOpen, setIsOpen}) {
    function fecha(){
        setIsOpen(false);
    }
    return (
        <div className={`fixed inset-0 flex justify-end bg-black/30 transition-all transition-discrete ease-in-out transition-delay-300 duration-500 ${isOpen ? "opacity-100" : "invisible"}`}>
            <div  className={`flex flex-row justify-between relative h-full w-[50vw] md:w-[35vw] transition-all ease-in-out duration-[1s] bg-white ${ isOpen ? "left-0" : "left-full" }`}>
                <nav className={"flex flex-col pl-5 pt-5 gap-5"}>
                    <LinkHeader href={""} texto={"Entradas"} setIsOpen={setIsOpen} />
                    <LinkHeader href={""} texto={"Principais"} setIsOpen={setIsOpen} />
                    <LinkHeader href={""} texto={"Sobremesas"} setIsOpen={setIsOpen} />
                    <LinkHeader href={""} texto={"Bebidas"} setIsOpen={setIsOpen} />
                </nav>
                <button className={"p-2 h-fit text-2xl text-red-900"} onClick={fecha} >
                    X
                </button>
            </div>
        </div>
    );
}

export default MenuMobile;
