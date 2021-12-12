import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Row, Checkbox, Label } from '../styled';
import { Link } from 'react-router-dom';

const TotalCard = styled.div`
    flex: 1;
    background-color: ${(props) => props.theme.headerBgColor};
    padding: 20px 46px 30px;
    border-radius: 20px;
    margin-left: 90px;
`
const Flex = styled.div`
    display: flex;
    align-items;
`
const Price = styled.span`
    font-weight: 600;
    font-size: 25px;
    color: ${(props) => props.theme.cityPrice};
`
const Night = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #84878B;
`
const Sum = styled.span`
    color: #B1B5C4;
    font-size: 18px;
    margin-left: 10px;
`
const PriceSum = styled.span`
    color: #B1B5C4;
    font-size: 14px;
    margin-left: 10px;
`
const Sale = styled.span`
    padding: 6px 10px;
    background: #145CE6;
    border-radius: 25px;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
`
const Date = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    border-top: 1px solid ${(props) => props.theme.bellAfter}
`
const CheckTitle = styled.h3`
    color: ${(props) => props.theme.priceCardTitle};
    font-weight: 500;
    font-size: 16px;
    margin: 20px 0 11px;
`
const Check = styled.div`
    padding: 12px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: ${(props) => props.theme.inpBg}
`
const DateIcon = styled.i`
    color: ${(props) => props.theme.dateIcon};
    font-size: 20px;
`
const DateText = styled.span`
    color: ${(props) => props.theme.cardText};
    margin-left: 10px;
    font-size: 14px;
`
const CheckTotal = styled.div`
    padding: 1px 20px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.inpBg}
`
const CheckPrice = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.cardText};
`
const TotalPrice = styled.span`
    font-weight: 500;
    color: ${(props) => props.theme.cardText};
`
const BookNow = styled(Link)`
    padding: 11px 0;
    font-size: 20px;
    display: block;
    text-align: center;
    margin: 12px 0;
    color: #FFFFFF; 
    background: #316BFF;
    border-radius: 12px;
`
const Warning = styled.div`
    font-size: 14px;
    color: #777E91;
    text-align: center;
`

export const CardPrice = ({price, id}) => {
    const { t } = useTranslation()
    return (
        <TotalCard>
            <Row>
                <div>
                    <Price>${price}.00<Night>/night</Night></Price>
                    <Sum>$184</Sum>
                </div>
                <Sale>20% OFF</Sale>
            </Row>

            <Date>
                <div>
                    <CheckTitle>{t('checkIn')}</CheckTitle>
                    <Check>
                        <DateIcon className="icon-date"></DateIcon>
                        <DateText>May 15, 2021 </DateText>
                    </Check>
                </div>
                
                <div>
                    <CheckTitle>{t('checkOut')}</CheckTitle>
                    <Check>
                        <DateIcon className="icon-date"></DateIcon>
                        <DateText>May 22, 2021 </DateText>
                    </Check>
                </div>
            </Date>

            <CheckTitle>{t('guest')}</CheckTitle>
            <Check>
                <DateText>2 {t('adult')}, 1 {t('child')}</DateText>
                <DateText className="icon-bottom"></DateText>
            </Check>

            <CheckTitle>{t('extra')}</CheckTitle>
            <div>
                <Row className="margin">
                    <Flex>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('allow')}</Label>
                    </Flex>
                    <PriceSum>$13</PriceSum>
                </Row>

                <Row className="margin">
                    <Flex>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('Breakfast')}</Label>
                    </Flex>
                    <PriceSum>$10</PriceSum>
                </Row>

                <Row className="margin">
                    <Flex>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('parking')}</Label>
                    </Flex>
                    <PriceSum>$6</PriceSum>
                </Row>

                <Row className="margin">
                    <Flex>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('extraPillow')}</Label>
                    </Flex>
                    <PriceSum>Free</PriceSum>
                </Row>
            </div>

            <CheckTitle>{t('price')}</CheckTitle>
            <CheckTotal>
                <Row className="margin">
                    <CheckPrice>1 {t('nights')}</CheckPrice>
                    <CheckPrice>$500</CheckPrice>
                </Row >
                <Row className="margin">
                    <CheckPrice>{t('discount')}</CheckPrice>
                    <CheckPrice>$200</CheckPrice>
                </Row>
                <Row className="margin">
                    <CheckPrice>{t('Breakfast')}</CheckPrice>
                    <CheckPrice>$10</CheckPrice>
                </Row>
                <Row className="margin">
                    <CheckPrice>{t('serviceFee')}</CheckPrice>
                    <CheckPrice>$5</CheckPrice>
                </Row>
            </CheckTotal>

            <Row>
                <CheckTitle>{t('totalPay')}</CheckTitle>
                <TotalPrice>$300</TotalPrice>
            </Row>

            <BookNow to={`/payment/${id}`}>{t('bookNow')}</BookNow>
            <Warning>{t('youWill')}</Warning>
        </TotalCard>
    )
}
