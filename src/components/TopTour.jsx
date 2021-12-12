import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const TopTourCard = styled.div`
    position: relative;
`
const TopTourImg = styled.img`
    border-radius: 16px;
    width: 100%;
`
const TopTourState = styled.span`
    position: absolute;
    top: 30px;
    left: 35px;
    background: rgba(20, 20, 22, 0.2);
    backdrop-filter: blur(4px);
    border-radius: 50px;
    padding: 12px 25px;
    font-weight: bold;
    font-size: 20px;
    color: #E9EBF3;
`
const TopTourInfo = styled.div`
    position: absolute;
    left: 35px;
    bottom: 35px;
`
const InfoCity = styled.h3`
    font-size: 34px;
    margin: 8px 0;
    letter-spacing: -0.005em;
    color: #FCFCFD;
    text-shadow: 0px 6px 20px rgba(0, 0, 0, 0.4);
`
const InfoPopular  = styled.span`
    color: #FCFCFD;
    opacity: 0.9;
`

export const TopTour = (props) => {
    const { t } = useTranslation();
    return (
        <TopTourCard>
           <TopTourImg src={props.image} alt={props.city} />
           <TopTourState>{props.state}</TopTourState>
           <TopTourInfo>
               <InfoCity>{props.city}</InfoCity>
               <InfoPopular>{props.pop} {t('popPlace')}</InfoPopular>
           </TopTourInfo>
        </TopTourCard>
    )
}
