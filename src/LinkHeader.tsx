// @ts-ignore
function LinkHeader({href,texto,setIsOpen}) {
    function fecha(){
        setIsOpen(false);
    }
    return (
        <a onClick={fecha} className={"md:text-white hover:text-red-500 hover:scale-105 font-bold transition-all text-xl"} href={href} >{texto}</a>
    );
}

export default LinkHeader;