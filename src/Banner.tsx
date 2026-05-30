import React from 'react';
import css from './Banner.module.css';
import Header from "./Header";
import BannerText from "./BannerText";

// @ts-ignore
function Banner({setIsOpen}) {
    return (
        <div className={`${css.banner} w-[100vw] h-[100vh]`}>
            <Header setIsOpen={setIsOpen} />
            <BannerText/>
        </div>
    );
}

export default Banner;
