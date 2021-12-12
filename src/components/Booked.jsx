import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Rating, IconStar, RatingParcent, RatingNum } from '../styled';
import styled from 'styled-components';

const BookedCard = styled.div`
    flex: 1;
    margin-left: 44px;
    padding: 36px 35px 40px;
    background-color: ${(props) => props.theme.headerBgColor};
    border: 2px solid ${(props) => props.theme.bellAfter};
    border-radius: 20px;
`
const BookedTitle = styled.h3`
    font-weight: 500;
    font-size: 18px;
    margin: 0 0 14px;
    color: ${(props) => props.theme.listInfo}
`
const BookedImg = styled.img`
    width: 100%;
    border-radius: 10px;
    margin: 27px 0 32px;
`
const ReportTitle = styled.h4`
    color: ${(props) => props.theme.arrowColor};
    font-weight: 500;
    margin: 20px 0 5px;
    font-size: 14px;
`
const Report = styled.span`
    display: block;
    font-weight: 500;
    color: ${(props) => props.theme.cardDes};
`
const Date = styled.div`
    width: 50%;
`
const BookTitle = styled.h3`
    margin: 40px 0;
    font-weight: 500;
    font-size: 26px;
    color: ${(props) => props.theme.Book};
`
const PriceName = styled.span`
    font-weight: 500;
    color: ${(props) => props.theme.headerText};
`
const BookedTotal = styled.div`
    padding: 10px 12px;
    border-radius: 6px;
    &:hover {
        background-color: ${(props) => props.theme.inpBg};
    }
    &:hover ${PriceName}{
        color: ${(props) => props.theme.inpLabel};
    }
`
const Price = styled.span`
    font-weight: 500;
    color: ${(props) => props.theme.inpLabel};
`
const P = styled.p`
    margin: 30px 0 0;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: #B1B5C4;
`

export const Booked = ({image, rating, reviews, name, price}) => {
    const { t } = useTranslation();
    return (
        <BookedCard>
            <BookedTitle>{name}</BookedTitle>
            <Rating>
                <IconStar className="icon-star"></IconStar> 
                <RatingParcent>{rating}</RatingParcent> 
                <RatingNum>({reviews} {t('reviews')})</RatingNum>
            </Rating>

            <BookedImg src={`/assets/img/${image}`} alt={name} />

            <Report>1 {t('bedroom')} + 1 {t('private')}</Report>

            <Row>
                <Date>
                    <ReportTitle>{t('checkIn')}</ReportTitle>
                    <Report>June 27, 2020 </Report>
                </Date>
                <Date>
                    <ReportTitle>{t('checkOut')}</ReportTitle>
                    <Report>June 30, 2020 </Report>
                </Date>
                <Date>
                    <ReportTitle>{t('guest')}</ReportTitle>
                    <Report>2 guests</Report>
                </Date>
            </Row>

            <BookTitle>{t('booked')}</BookTitle>

            <BookedTotal>
                <Row>
                    <PriceName>$119  +  5{t('nights')}</PriceName>
                    <Price>${price * 5}</Price>
                </Row>
            </BookedTotal>

            <BookedTotal>
                <Row>
                    <PriceName>{t('ocupancy')}</PriceName>
                    <Price>-$125</Price>
                </Row>
            </BookedTotal>

            <BookedTotal>
                <Row>
                    <PriceName>{t('service')}</PriceName>
                    <Price>$103</Price>
                </Row>
            </BookedTotal>

            <BookedTotal>
                <Row>
                    <PriceName>{t('total')}</PriceName>
                    <Price>$833</Price>
                </Row>
            </BookedTotal>
            
            <P>{t('report')}</P>
        </BookedCard>
    )
}
