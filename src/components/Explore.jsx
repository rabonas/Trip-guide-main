import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { Row, IconStar, RatingParcent, RatingNum } from '../styled'

const ExploreCard = styled.div`
    background-color: ${(props) => props.theme.headerBgColor};
    border: 1px solid ${(props) => props.theme.bellAfter};
    border-radius: 20px;
    padding: 15px 15px 20px;
    &:hover {
        box-shadow: 0px 15px 45px rgba(102, 102, 102, 0.1);
        border: none;
    }
`
const ExploreImg = styled.img`
    width: 100%;
    border-radius: 16px;
`
const Rating = styled.div`
    margin: 20px 0 2px;
    font-weight: 500;
    font-size: 14px;
`
const InfoName = styled.h4`
    font-size: 20px;
    color: ${(props) => props.theme.btnColor};
    margin: 10px 0;
`
const InfoPrice = styled.span`
    padding: 4px 10px;
    font-weight: 500;
    font-size: 18px;
    color: #316BFF;
    background: rgba(49, 107, 255, 0.2);
    border-radius: 6px;
`
const Distance = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: ${(props) => props.theme.iconColor};
`
const Info = styled.span`
    display: block;
    font-size: 14px;
    color: ${(props) => props.theme.iconColor};
    margin-top: 8px;
`

export const Explore = ({photo, title, rooms, radius, price, location}) => {
    const { t } = useTranslation()
    return (
        <ExploreCard>
            <ExploreImg src={`/assets/img/${photo}`} alt="" />
            <Rating>
                <IconStar className="icon-star"></IconStar> 
                <RatingParcent>4.91</RatingParcent> 
                <RatingNum>(147)</RatingNum>
            </Rating>
            <Row>
                <InfoName>{title}</InfoName>
                <InfoPrice>${price}</InfoPrice>
            </Row>
            <Distance>{radius} {t('town')}</Distance>
            <Info><i className="icon-map"></i> {location}</Info>
            <Info><i className="icon-rooms"></i> {t('rooms')}: {rooms}</Info>
        </ExploreCard>
    )
}
