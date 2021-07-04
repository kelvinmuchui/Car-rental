import React from "react";
import styled from 'styled-components'
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems} from "../navbar/navitems"
const NavbarContainer = styled.div`
    min-height: 68px
    ${ tw`
        w-full
        min-w-full
        max-w-screen-xl
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`
const LogoConatainer = styled.div`

`
export function NavBar(){
    return <NavbarContainer>
        <LogoConatainer>
            <Logo/>
        </LogoConatainer>
        <NavItems/>
    </NavbarContainer>
}