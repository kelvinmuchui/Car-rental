import { faCalendar, faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Button } from "../button";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const CardContainer = styled.div`

    box-shadow: 0 1.3px 12px -3px rgba(0,0,0, 0.4);
    min-height: 4.3em;
    ${
        tw`
            flex
            justify-center
            items-center
            rounded-md
            bg-white
            pt-1
            pb-1
            pr-2
            pl-2
            md:pt-2
            md:pb-2
            md:pl-9
            md:pr-9
        `
    }
`

const ItemContainer = styled.div`
    ${tw` flex relative` }
`

const Icon =styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`

const Name =styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer

    `}
`
const LineSeperator =   styled.span`
     width: 2px;
     height:45%;
     ${
         tw`
            bg-gray-500
            mr-2
            ml-2
            md:mr-5
            md:ml-5

         `
     }


`

const DateCalender = styled(Calendar)`
     position: absolute;
     max-width: none;
    top: 3.5em;
     left:-2em; 
`

const SmallIcon =  styled.span`
     ${tw`
        text-gray-700
        fill-current
        text-xs
        md:text-base
        ml-1
     `}

`
export function BookCard () {


    const [startDate, setStartDate] = useState <Date>( new Date());
    const [isStartCalenderOpen, setStateCalenderOpen] =useState(false)
    const [returnDate, setReturnDate] = useState <Date>( new Date());
    const [isReturnCalenderOpen, setReturnCalenderOpen] =useState(false)

    const toggleopenStartDateCalender = () => {

        setStateCalenderOpen(!isStartCalenderOpen)
        if(isReturnCalenderOpen) setReturnCalenderOpen(false)
    }
    const toggleReturnDateCalender = () => {

        setReturnCalenderOpen(!isReturnCalenderOpen)
        if(isStartCalenderOpen) setStateCalenderOpen(false)
    }
    console.log("Value :", startDate)
    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon ={faCalendarAlt}/>
                </Icon>
                <Name onClick ={toggleopenStartDateCalender}>Pick Up Data</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon ={ isStartCalenderOpen? faCaretUp : faCaretDown} />
                </SmallIcon>
                    { isStartCalenderOpen &&  <DateCalender value ={startDate} onChange ={setStartDate as any}/>} 
            </ItemContainer>
            <LineSeperator/>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon ={faCalendarAlt}/> 
                </Icon>
                <Name onClick ={toggleReturnDateCalender}>Return Data</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon ={ isReturnCalenderOpen? faCaretUp : faCaretDown} />
                </SmallIcon>
                    { isReturnCalenderOpen &&  <DateCalender value ={returnDate} onChange ={setReturnDate as any}/>} 
            </ItemContainer>
            <Marginer direction="horizontal" margin ="2em"/>
            <Button text = "Book Your Ride "/>
        </CardContainer>
    )


}