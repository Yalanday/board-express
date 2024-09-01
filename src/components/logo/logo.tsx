import React from "react";
import LogoStyled from "./logo-styled";

const Logo = () => {

    function MouseOver(event: React.ChangeEvent<HTMLElement>): void {
        event.target.style.transition=  'all 0.5s ease';
        event.target.style.opacity = '1';
    }
    function MouseOut(event: React.ChangeEvent<HTMLElement>){
        event.target.style.opacity = '0.7';
    }

    return (
        <LogoStyled
            onMouseOver={MouseOver} onMouseOut={MouseOut}
            src={'/img/logo.png'} width="150" height="50"/>
    );
}

export default Logo;
