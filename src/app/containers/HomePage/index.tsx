import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import { NavBar } from '../../components/navbar';
import TopSection from './topSection'
import { BookingSteps } from './bookingSteps';
import { AboutUs } from './aboutUs';
const PageContainer = styled.div `
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`; 



export  function HomePage() {
    return (
        <PageContainer>
            <NavBar/>
            <TopSection/>
            <Marginer direction ="vertical" margin ="2em"/>
            <BookCard/>
            <Marginer direction="vertical" margin="10em" />
            <BookingSteps />
            <Marginer direction="vertical" margin="8em" />
            <AboutUs />
            <Marginer direction="vertical" margin="8em" />
        </PageContainer>
    )
}
