import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, AlignCenter } from '../styled';
import styled from "styled-components";

const FeaturedCard = styled.div`
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    margin-top: 28px;
    object-fit: cover;
`
const FeaturedCardBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(38.52deg, rgba(3, 3, 3, 0.54) -3.66%, rgba(6, 6, 6, 0) 45.57%);
    border-radius: 18px;
`
const FeaturedCardBgMini = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(357.11deg, rgba(30, 30, 30, 0.67) 11.64%, rgba(66, 66, 66, 0) 23.22%);
    border-radius: 18px;
`
const Rating = styled.span`
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 2px 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
    border-radius: 20px;
    font-weight: bold;
    font-size: 18px;
    color: #FF543D;
`
const Info = styled.div`
    position: absolute;
    bottom: 15px;
    left: 30px;
`
const InfoTitleBig = styled.h3`
    margin: 20px 0;
    font-size: 40px;
    color: #FFFFFF;
`
const InfoTitleMid = styled.h3`
    margin: 12px 0;
    font-size: 24px;
    color: #FFFFFF;
`
const InfoTitleMini = styled.h3`
    margin: 6px 0;
    font-size: 18px;
    color: #FFFFFF;
`
const ActiveProfileBig = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
`
const ActiveProfileMid = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`
const ActiveProfileMini = styled.img`
    width: 14px;
    height: 14px;
    border-radius: 50%;
`
const ActiveCountBig = styled.span`
    font-size: 20px;
    color: #FFFFFF;
    margin-left: 5px;
`
const ActiveCountMid = styled.span`
    font-size: 14px;
    color: #FFFFFF;
    margin-left: 5px;
`
const ActiveCountMini = styled.span`
    font-size: 10px;
    color: #FFFFFF;
    margin-left: 5px;
`

export const Featured = () => {
    const { t } = useTranslation()
    return (
        <Row>
            <div>
                <FeaturedCard>
                    <img src="/assets/img/barcelona.jpg" alt="" />
                    <FeaturedCardBg>
                        <Rating>3.5</Rating>
                        <Info>
                            <InfoTitleBig>{t('tour1')}</InfoTitleBig>
                            <AlignCenter>
                                <ActiveProfileBig src="/assets/img/person.jpg" alt="" />
                                <ActiveCountBig>196 {t('activitie')}</ActiveCountBig>
                            </AlignCenter>
                        </Info>
                    </FeaturedCardBg>
                </FeaturedCard>
                <Row>
                    <FeaturedCard>
                        <img src="/assets/img/london.jpg" alt="" />
                        <FeaturedCardBgMini>
                            <Rating>3.5</Rating>
                            <Info>
                                <InfoTitleMid>{t('tour2')}</InfoTitleMid>
                                <AlignCenter>
                                    <ActiveProfileMid src="/assets/img/person.jpg" alt="" />
                                    <ActiveCountMid>196 {t('activitie')}</ActiveCountMid>
                                </AlignCenter>
                            </Info>
                        </FeaturedCardBgMini>
                    </FeaturedCard>

                    <FeaturedCard>
                        <img src="/assets/img/australia2.jpg" alt="" />
                        <FeaturedCardBgMini>
                            <Rating>3.5</Rating>
                            <Info>
                                <InfoTitleMid>{t('tour3')}</InfoTitleMid>
                                <AlignCenter>
                                    <ActiveProfileMid src="/assets/img/person.jpg" alt="" />
                                    <ActiveCountMid>196 {t('activitie')}</ActiveCountMid>
                                </AlignCenter>
                            </Info>
                        </FeaturedCardBgMini>
                    </FeaturedCard>
                </Row>
            </div>
            <div>
                <FeaturedCard>
                    <img src="/assets/img/australia.jpg" alt="" />
                    <FeaturedCardBgMini>
                        <Rating>3.5</Rating>
                        <Info>
                            <InfoTitleMini>{t('tour3')}</InfoTitleMini>
                            <AlignCenter>
                                <ActiveProfileMini src="/assets/img/person.jpg" alt="" />
                                <ActiveCountMini>196 {t('activitie')}</ActiveCountMini>
                            </AlignCenter>
                        </Info>
                    </FeaturedCardBgMini>
                </FeaturedCard>
                <FeaturedCard>
                    <img src="/assets/img/japan.jpg" alt="" />
                    <FeaturedCardBgMini>
                        <Rating>3.5</Rating>
                        <Info>
                            <InfoTitleMini>{t('tour4')}</InfoTitleMini>
                            <AlignCenter>
                                <ActiveProfileMini src="/assets/img/person.jpg" alt="" />
                                <ActiveCountMini>196 {t('activitie')}</ActiveCountMini>
                            </AlignCenter>
                        </Info>
                    </FeaturedCardBgMini>
                </FeaturedCard>
                <FeaturedCard>
                    <img src="/assets/img/japan2.jpg" alt="" />
                    <FeaturedCardBgMini>
                        <Rating>3.5</Rating>
                        <Info>
                            <InfoTitleMini>{t('tour4')}</InfoTitleMini>
                            <AlignCenter>
                                <ActiveProfileMini src="/assets/img/person.jpg" alt="" />
                                <ActiveCountMini>196 {t('activitie')}</ActiveCountMini>
                            </AlignCenter>
                        </Info>
                    </FeaturedCardBgMini>
                </FeaturedCard>
            </div>
        </Row>
    )
}
