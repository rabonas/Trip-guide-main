import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'

const GetProCard = styled.div`
    position: absolute;
    top: -125px;
    display: flex;
    width: 86.7%;
    justify-content: space-between;
    align-items: flex-end;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 16px;
    padding: 62px 90px;
`
const GetProTitle = styled.h2`
    font-weight: 800;
    font-size: 44px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    margin: 0 0 16px;
`
const GetProText = styled.p`
    width: 370px;
    line-height: 28px;
    margin: 0;
    letter-spacing: 0.5px;
    color: #FFFFFF;
    opacity: 0.88;
`
const Inp = styled.form`
    display: flex;
    padding: 8px;
    background: #FCFCFD;
    box-shadow: 10px 16px 60px -7px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
`
const InpMail = styled.input`
    width: 342px;
    padding: 14px;
    border: none;
    background-color: transparent;
    outline: none;
    &::placeholder {
        font-size: 16px;
        color: #B1B5C4;
    }
`
const InpBtn = styled.button`
    border: none;
    padding: 18px 30px;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: #FFFFFF;
    background: #353945;
    box-shadow: 0px 12px 20px -5px rgba(23, 23, 126, 0.1);
    border-radius: 4px;
`

export const GetPro = () => {
    const { t } = useTranslation()

    const mail = useRef(null)

    const handleMail = (e) => {
        e.preventDefault();
        console.log(mail.current.value);
    }

    return (
        <GetProCard style={{backgroundImage: 'url(/assets/img/getPro.jpg)'}}>
            <div>
                <GetProTitle>{t('getPro')}</GetProTitle>
                <GetProText>{t('getProText')}</GetProText>
            </div>
            <Inp>
                <InpMail type="email" placeholder={t('mail')} ref={mail} />
                <InpBtn onClick={handleMail}>{t('subscribe')}</InpBtn>
            </Inp>
        </GetProCard>
    )
}
