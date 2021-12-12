import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Row, IconStar, Rating, RatingParcent, RatingNum } from '../styled';

const ListItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme.bellAfter};
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 50px;
    text-align: left;
`
const ListTitle = styled.h3`
    margin: 30px 0 22px;
    font-size: 40px;
    letter-spacing: -0.005em;
    color: ${(props) => props.theme.titleColor};
`
const ListText = styled.div`
    padding: 0 26px; 
`
const Comforts = styled.span`
    display: block;
    font-size: 14px;
    margin: 12px 0;
    color: ${(props) => props.theme.cardText};
`
const Icon = styled.i`
    margin-right: 10px;
    color: ${(props) => props.theme.iconColor};
`
const Flex = styled.div`
    display: flex;
`
const Gps = styled.span`
    margin-left: 20px;
    font-size: 14px;
    color: ${(props) => props.theme.iconColor};
`
const Info = styled.span`
    color: ${(props) => props.theme.listInfo};
    display: inline-block;
    line-height: 34px;
    &:nth-child(1) {
        margin-right: 10px;
    }
`
const About = styled.div`
    margin: 30px 0;
`
const Price = styled.span`
    display: block;
    font-weight: bold;
    font-size: 28px;
    color: ${(props) => props.theme.listPrice};
    padding: 10px 20px;
    background: ${(props) => props.theme.footerBg};
    border-radius: 37px;
    margin-bottom: 20px;
`
const ForPrice = styled.span`
    color: #84878B;
    font-weight: 500;
    font-size: 16px;
`
const Booking = styled(Link)`
    padding: 10px 40px;
    background: #3B71FE;
    box-shadow: 0px 5px 20px rgba(20, 92, 230, 0.14);
    border-radius: 23px;
    border: none;
    font-size: 20px;
    color: #FFFFFF;
`
const Img = styled.div`
    width: 420px;
    height: 465px;
    overflow: hidden;
    object-fit: cover;
`

export const List = (props) => {
    const { t } = useTranslation()
    return (
        <ListItem key={props.id}>
            <Img><img src={props.image} alt="" /></Img>
            <ListText>
                <ListTitle>{props.name}</ListTitle>
                <Flex>
                    <Rating>
                        <IconStar className="icon-star"></IconStar> 
                        <RatingParcent>{props.rating}</RatingParcent> 
                        <RatingNum>({props.reviews} {t('reviews')})</RatingNum>
                    </Rating>
                    <Gps><Icon className="icon-flag"></Icon>{props.location}</Gps>
                </Flex>

                <About>
                    <Info><Icon className="icon-map"></Icon>{props.location}</Info>
                    <Info><Icon className="icon-date"></Icon>15.05.2021-16.05.2021</Info>
                    <Info><Icon className="icon-plan"></Icon>Depature from zuich</Info>
                </About>

                <Row>
                    <div>
                        <Comforts><Icon className="icon-wifi"></Icon>{t('freeWifi')}</Comforts>
                        <Comforts><Icon className="icon-parking"></Icon>{t('freeParking')}</Comforts>
                        <Comforts><Icon className="icon-special"></Icon>{t('specialOffer')}</Comforts>
                        <Comforts><Icon className="icon-earth"></Icon>{t('visit')}</Comforts>
                        <Comforts><Icon className="icon-taking"></Icon>{t('talking')}</Comforts>
                    </div>
                    <div>
                        <Price>{props.price} <ForPrice>{t('forTwo')}</ForPrice></Price>
                        <Booking to={`/details/${props.id}`}>{t('bookNow')}</Booking>
                    </div>
                </Row>

            </ListText>
        </ListItem>
    )
}
