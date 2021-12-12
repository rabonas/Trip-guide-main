import React, { useEffect, useState } from 'react'
import { Bread, Container, ThisPage, Rating, IconStar, RatingParcent, RatingNum, Row } from '../styled'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import apiCalls from '../config/api';

const CongratulationsSec = styled.section`
    padding: 40px 0 250px;
    background-color: ${(props) => props.theme.bgColor}
`
const Congratulation = styled.h4`
    margin: 70px 0 20px;
    font-size: 25px;
    color: ${(props) => props.theme.conTitle}
`
const ConTitle = styled.h2`
    margin: 0;
    font-weight: 500;
    font-size: 48px;
    color: ${(props) => props.theme.btnColor};
    padding-bottom: 24px;
    border-bottom: 1px solid ${(props) => props.theme.bellAfter}
`
const SmallTitle =styled.h3`
    margin: 37px 0 27px;
    font-size: 34px;
    color: ${(props) => props.theme.titleColor};
    letter-spacing: -0.005em;
`
const Flex = styled.div`
    display: flex;
    align-items: center;
`
const Comfort = styled.span`
    font-weight: 500;
    font-size: 14px;
    margin-left: 37px;
    color: ${(props) => props.theme.detailText}
`
const Info = styled.div`
    padding-top: 25px;
    margin: 24px 117px 0 0;
    flex: 1;
    border-top: 1px solid ${(props) => props.theme.infoBr};
`
const Choice = styled.div`
    padding: 7px 20px 11px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.footerBg};
    &:nth-child(2) {
        width: 40%;
        margin-left: 24px;
    }
`
const Reserve = styled.div`
    padding: 20px 25px;
    margin: 30px 0;
    border-radius: 10px;
    background-color: ${(props) => props.theme.footerBg};
    border: ${(props) => props.theme.reserveBr};
`
const InfoImg = styled.img`
    width: 50%;
    flex: 2;
    border-radius: 20px;
`
const ChoiceTitle = styled.h4`
    font-weight: 500;
    font-size: 14px;
    margin: 0 0 5px;
    color: ${(props) => props.theme.inpLabel};
`
const ChoiceText = styled.span`
    font-weight: 500;
    color: #84878B;
`
const ReserveTitle = styled.h3`
    font-size: 28px;
    margin: 0 0 24px;
    color: ${(props) => props.theme.cityName}
`
const ReserveText = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.inpLabel};
`
const GoHome = styled(Link)`
    padding: 13px 27px;
    background: #3B71FE;
    border-radius: 34px;
    font-weight: bold;
    color: #fff;
`

export const Congratulations = () => {
    const { t } = useTranslation();
    const [hotel, setHotel] = useState({});

    const { id } = useParams();

    useEffect(() => {
        apiCalls.getHotelDetail(id).then(data => {
            setHotel(data);
        })
    }, [id]);

    return (
        <CongratulationsSec>
            <Container>
                <Bread to="/">{t('pageName1')} <span className="icon-right"></span></Bread>
                <Bread to="/hotelist">{t('pageName2')} <span className="icon-right"></span></Bread>
                <Bread to={`/details/${hotel.id}`}>{t('pageName3')} <span className="icon-right"></span></Bread>
                <Bread to={`/payment/${hotel.id}`}>{t('pageName4')} <span className="icon-right"></span></Bread>
                <ThisPage>{t('pageName5')}</ThisPage>

                <Congratulation>{t('congrat')}</Congratulation>
                <ConTitle>{t('yourTrip')}</ConTitle>
                <SmallTitle>{hotel.name}</SmallTitle>

                <Flex>
                    <Rating>
                        <IconStar className="icon-star"></IconStar> 
                        <RatingParcent>{hotel.rating}</RatingParcent> 
                        <RatingNum>({hotel.reviews} {t('reviews')})</RatingNum>
                    </Rating>

                    <Comfort>1 {t('bedroom')} + {t('private')}</Comfort>
                </Flex>

                <Row>
                    <Info>
                        <Flex>
                            <Choice>
                                <ChoiceTitle>{t('date')}</ChoiceTitle>
                                <ChoiceText>May 15 - 22, 2021 </ChoiceText>
                            </Choice>
                            <Choice>
                                <ChoiceTitle>{t('traveller')}</ChoiceTitle>
                                <ChoiceText>1 Passenger</ChoiceText>
                            </Choice>
                        </Flex>
                        <Reserve>
                            <ReserveTitle>{t('reserveDet')}</ReserveTitle>
                            <Row className="margin">
                                <ReserveText><i className="icon-booking-code"> {t('booking')}</i></ReserveText>
                                <ChoiceText>FD_158456</ChoiceText>
                            </Row>

                            <Row className="margin">
                                <ReserveText><i className="icon-calendar"> {t('date')}</i></ReserveText>
                                <ChoiceText>30 Apr, 2021</ChoiceText>
                            </Row>

                            <Row className="margin">
                                <ReserveText><i className="icon-total"> {t('total')}</i></ReserveText>
                                <ChoiceText>$833</ChoiceText>
                            </Row>

                            <Row className="margin">
                                <ReserveText><i className="icon-payment"> {t('payment')}</i></ReserveText>
                                <ChoiceText>{t('creaditCard')}</ChoiceText>
                            </Row>
                        </Reserve>
                        <GoHome to="/">{t('goTo')}</GoHome>
                    </Info>
                    <InfoImg src={`/assets/img/${hotel.photo}`} alt="" />
                </Row>
            </Container>
        </CongratulationsSec>
    )
}
