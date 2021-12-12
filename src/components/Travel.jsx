import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { IconStar } from '../styled';

const TravelCard = styled.div`
    position: relative;
    width: 23%;
`
const TravelImg = styled.img`
    width: 100%;
    border-radius: 15px;
`
const TravelBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 4px;
    right: 0;
    left: 0;
    border-radius: 15px;
    background: linear-gradient(5.24deg, rgba(22, 22, 22, 0.48) 16.31%, rgba(35, 35, 35, 0) 35.48%);
`
const TravelText = styled.div`
    position: absolute;
    bottom: 21px;
    left: 30px;
`
const TravelName = styled.h3`
    font-weight: 600;
    margin: 8px 0;
    font-size: 24px;
    color: #FFFFFF;
`
const TravelRating = styled.span`
    font-size: 14px;
    color: #FFFFFF;
`

export const Travel = (props) => {
    const { t } = useTranslation()
    return (
        <TravelCard>
            <TravelImg src={props.image} alt={props.name} />
            <TravelBg></TravelBg>
            <TravelText>
                <TravelName>{props.name}</TravelName>
                <TravelRating><IconStar className="icon-star"></IconStar> 4.8 (122 {t('reviews')})</TravelRating>
            </TravelText>
        </TravelCard>
    )
}
