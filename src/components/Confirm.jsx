import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Row, Checkbox, Label } from '../styled'
import { Link } from 'react-router-dom';

const ConfirmPlace = styled.div`
    flex: 2;
`
const Flex = styled.div`
    display: flex;
    align-items: center;
`
const ConfirmTitle = styled.h2`
    margin: 0 0 25px;
    color: ${(props) => props.theme.listPrice};
    font-size: 40px;
    letter-spacing: -0.005em;
`
const Cod = styled.div`
    font-weight: 500;
    letter-spacing: -0.02em;
    color: #3D4852;
    margin: 35px 0 10px;
`
const Title = styled.h3`
    margin: 40px 0 30px;
    font-size: 34px;
    letter-spacing: -0.005em;
    color: ${(props) => props.theme.confirmTit}
`
const Creadit = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    border: ${(props) => props.theme.cardBr};
    border-radius: 6px;
    background-color: ${(props) => props.theme.creadit};
`
const Info = styled.div`
    width: 70%;
    padding-bottom: 30px;
    margin-bottom: 40px;
    border-top: 1px solid ${(props) => props.theme.footerBg};
    border-bottom: 1px solid ${(props) => props.theme.footerBg};
`
const Tour = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 22px 8px 16px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.footerBg};
    &:nth-child(3) {
        margin-top: 24px;
    }
`
const TourTitle = styled.span`
    color: ${(props) => props.theme.tourTitle};
    display: block;
    margin-bottom: 5px;
`
const TourText = styled.span`
    color: ${(props) => props.theme.tourText};
    font-weight: 500;
`
const Pencil = styled.i`
    color: #84878B;
    font-size: 20px;
`
const BlueCard = styled.div`
    width: 48%;
    padding: 27px 30px 22px 27px;
    background: #CED9FD;
    border-radius: 20px;
`
const GreenCard = styled.div`
    width: 48%;
    padding: 27px 22px 25px 24px;
    background: #BDDBA6;
    border-radius: 20px;
`
const CardIcon = styled.i`
    font-size: 28px;
    color: #3B3E44;
`
const MenuIcon = styled.i`
    font-size: 20px;
    color: #84878B;
`
const Name = styled.span`
    font-weight: 500;
    letter-spacing: -0.02em;
    color: #3D4852;
`
const CardLabel = styled.label`
    display: block;
    margin: 20px 0 12px;
    color: ${(props) => props.theme.inpLabel};
`
const NumInp = styled.input`
    width: 68%;
    padding: 13px 20px;
    border-radius: 10px;
    border: 1px solid #878CFF;
    outline: none;
    background-color: ${(props) => props.theme.numInpBg};
    color: ${(props) => props.theme.inpText};
`
const InpBottom = styled.div`
    width: 68%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    & div {
        width: 45%;
    }
`
const PasInp = styled.input`
    width: 100%;
    height: 50px;
    padding: 13px 20px;
    outline: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.numInpBg};
    color: ${(props) => props.theme.inpText};
    border: 2px solid ${(props) => props.theme.inpBr};
`
const Check = styled.div`
    margin: 20px 0 35px;
`
const ConfirmLink = styled(Link)`
    padding: 12px 20px;
    font-size: 18px;
    color: #FFFFFF;
    background: #3B71FE;
    border-radius: 36px;
`

export const Confirm = ({id}) => {
    const { t } = useTranslation()
    return (
        <ConfirmPlace>
            <ConfirmTitle>{t('confirm')}</ConfirmTitle>
            <Info>
                <Title>{t('yourTour')}</Title>
                <Tour>
                    <div>
                        <TourTitle>{t('date')}</TourTitle>
                        <TourText>May 15 - 22, 2021</TourText>
                    </div>
                    <Pencil className="icon-pencil"></Pencil>
                </Tour>
                <Tour>
                    <div>
                        <TourTitle>{t('traveller')}</TourTitle>
                        <TourText>1 Passenger</TourText>
                    </div>
                    <Pencil className="icon-pencil"></Pencil>
                </Tour>
                <Title>{t('creadit')}</Title>
                <Flex>
                    <Creadit>
                        <img src="/assets/img/card.png" alt="" />
                    </Creadit>

                    <Creadit>
                        <img src="/assets/img/paypal.png" alt="" />
                    </Creadit>

                    <Creadit>
                        <img src="/assets/img/visa.png" alt="" />
                    </Creadit>
                </Flex>
            </Info>
            <Row>
                <BlueCard>
                    <Row>
                        <CardIcon className="icon-card"></CardIcon>
                        <MenuIcon className="icon-menu"></MenuIcon>
                    </Row>
                    <Cod>8948   xxxx  xxxx  7894</Cod>
                    <Row>
                        <Name>{t('holder')}</Name>
                        <img src="/assets/img/circles.png" alt="" />
                    </Row>
                </BlueCard>

                <GreenCard>
                    <Row>
                        <CardIcon className="icon-card"></CardIcon>
                        <MenuIcon className="icon-menu"></MenuIcon>
                    </Row>
                    <Cod>8948   xxxx  xxxx  7894</Cod>
                    <Row>
                        <Name>{t('holder')}</Name>
                        <img src="/assets/img/visa.png" alt="" />
                    </Row>
                </GreenCard>
            </Row>

            <CardLabel>{t('cardNum')}</CardLabel>
            <NumInp type="number" />
            <InpBottom>
                <div>
                    <CardLabel>{t('expiry')}</CardLabel>
                    <PasInp type="date" className="check" />
                </div>
                <div>
                    <CardLabel>CVC/CVV</CardLabel>
                    <PasInp type="password" />
                </div>
            </InpBottom>

            <Check>
                <Flex>
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('save')}</Label>
                </Flex>
            </Check>
            <ConfirmLink to={`/congratulations/${id}`}>{t('reserve')}</ConfirmLink>

        </ConfirmPlace>
    )
}

