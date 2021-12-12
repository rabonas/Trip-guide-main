import React from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components'
import { AlignCenter, Container, LogoText } from '../styled'
import { GetPro } from './GetPro';

const Foot = styled.footer`
    position: relative;
    padding: 225px 0 150px;
    background-color: ${(props) => props.theme.footerBg};
`
const LinkTitle = styled.h3`
    margin: 0 0 22px;
    color: ${(props) => props.theme.colorLogo}
`
const FooterText = styled.p`
    width: 250px;
    line-height: 24px;
    color: ${(props) => props.theme.headerText}
`
const FooterLink = styled.a`
    display: block;
    font-weight: 500;
    color: ${(props) => props.theme.headerText};
    margin-bottom: 16px;
`
const FooterRow = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Theme = styled.div`
    display: inline-block;
    padding: 4px;
    border-radius: 10px;
    border: 0.5px solid ${(props) => props.theme.themeBr};
    background-color: ${(props) => props.theme.themeBg};
`
const ThemeBtnLight = styled.button`
    padding: 5px 22px;
    font-size: 18px;
    border: none;
    box-shadow: 0px 2px 2px rgba(67, 67, 67, 0.1);
    border-radius: 8px;
    background-color: ${(props) => props.theme.LightBtn};
    color: ${(props) => props.theme.lightColor};
`
const ThemeBtnDark = styled.button`
    padding: 7px 22px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.darkBtn};
    color: ${(props) => props.theme.darkColor};
`

export const Footer = () => {
    const { t } = useTranslation()
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <Foot>
            <Container>
            <GetPro/>
                <FooterRow>
                    <div>
                        <Link to="/">
                            <AlignCenter>
                                <img src="/assets/img/tripGuideLogo.svg" alt="" />
                                <LogoText>TripGuide</LogoText>
                            </AlignCenter>
                        </Link>
                        <FooterText>{t('footerText')}</FooterText>
                        <Theme>
                            <ThemeBtnLight onClick={() => toggleTheme('light')}><i className="icon-sun"></i></ThemeBtnLight>
                            <ThemeBtnDark onClick={() => toggleTheme('dark')}><i className="icon-moon"></i></ThemeBtnDark>
                        </Theme>
                    </div>
                    <div>
                        <LinkTitle>{t('services')}</LinkTitle>
                        <FooterLink href="#">{t('servicesLink1')}</FooterLink>
                        <FooterLink href="#">{t('servicesLink2')}</FooterLink>
                        <FooterLink href="#">{t('servicesLink3')}</FooterLink>
                        <FooterLink href="#">{t('servicesLink4')}</FooterLink>
                        <FooterLink href="#">{t('servicesLink5')}</FooterLink>
                    </div>
                    <div>
                        <LinkTitle>{t('support')}</LinkTitle>
                        <FooterLink href="#">{t('supportLink1')}</FooterLink>
                        <FooterLink href="#">{t('supportLink2')}</FooterLink>
                        <FooterLink href="#">{t('supportLink3')}</FooterLink>
                        <FooterLink href="#">{t('supportLink4')}</FooterLink>
                        <FooterLink href="#">{t('supportLink5')}</FooterLink>
                    </div>
                    <div>
                        <LinkTitle>{t('business')}</LinkTitle>
                        <FooterLink href="#">{t('businessLink1')}</FooterLink>
                        <FooterLink href="#">{t('businessLink2')}</FooterLink>
                        <FooterLink href="#">{t('businessLink3')}</FooterLink>
                        <FooterLink href="#">{t('businessLink4')}</FooterLink>
                        <FooterLink href="#">{t('businessLink5')}</FooterLink>
                    </div>
                </FooterRow>
            </Container>
        </Foot>
    )
}
