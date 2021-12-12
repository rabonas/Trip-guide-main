import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { IconStar, RatingParcent } from '../styled'

const TrendingCard = styled.div`
    text-align: left;
    width: 47%;
    margin-top: 35px;
    border-radius: 20px;
    display: flex;
    padding: 20px;
    background-color: ${(props) => props.theme.headerBgColor};
`
const TrendingImg = styled.img`
    border-radius: 15px;
`
const TrendingText = styled.div`
    margin-left: 30px;
`
const Name = styled.h4`
    margin: 0;
    font-size: 24px;
    color: ${(props) => props.theme.cityName};
`
const Rating = styled.div`
    margin: 12px 0 22px;
`
const Price = styled.span`
    display: block;
    font-weight: 600;
    font-size: 25px;
    color: ${(props) => props.theme.cityPrice};
`
const Night = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #84878B;
`
const Btn = styled.button`
    font-size: 14px;
    color: #FFFFFF;
    border: none;
    margin-top: 24px;
    padding: 8px 16px;
    background: #316BFF;
    border-radius: 6px;
`

export const Trending = (props) => {
    const { t } = useTranslation()
    return (
        <TrendingCard key={props.id}>
            <TrendingImg src={props.image} alt={props.name} />
            <TrendingText>
                <Name>{props.name}</Name>
                <Rating>
                    <IconStar className="icon-star"></IconStar> 
                    <RatingParcent>{props.rating}</RatingParcent> 
                </Rating>
                <Price>${props.price}.00<Night>/night</Night></Price>
                <Btn>{t('bookNow')}</Btn>
            </TrendingText>
        </TrendingCard>
    )
}
