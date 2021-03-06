import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png"
const LogoConatainer = styled.div`
    ${tw`
    flex
    items-center
    `}
`
const LogoText = styled.div`
    ${tw`
        text-xl
        md: text-2xl
        font-bold
        text-black
        m-1
    `}
`

const Image = styled.div`

    width: auto;
    ${`
        h-6
        md:h-9
    
    `}
    img {
        width: auto;
        height: 100%
    }
`

export function Logo(){

    return <LogoConatainer>
        <Image>
            <img src = {CarLogoImg}alt=""/>
        </Image>
        <LogoText>YourCar. </LogoText>

    </LogoConatainer>

}