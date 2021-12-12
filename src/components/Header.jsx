import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { VscSignIn } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import { AlignCenter, LogoText } from '../styled';
import styled from "styled-components";

const HeaderTop = styled.header`
    background-color: ${(props) => props.theme.headerBgColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
`
const CounterBell = styled.span`
    position: absolute;
    top: -3px;
    right: -7px;
    border-radius: 50%;
    padding: 2px 5px;
    color: #fff;
    font-weight: 500;
    font-size: 8px;
    background-color: #EB5757;
`
const Flag = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`
const Bell = styled.div`
    position: relative;
    margin: 0 38px 0 17px;
    &:after {
        content: '';
        position: absolute;
        top: -4px;
        right: -17px;
        width: 1px;
        height: 32px;
        background-color: ${(props) => props.theme.bellAfter};
    }
`
const IconBell = styled.i`
    font-size: 18px;
    color: ${(props) => props.theme.headerText};
`
const DropdownContent = styled.div`
    display: none;
    position: absolute;
    left: -40px;
    background-color: ${(props) => props.theme.headerBgColor};
    border-radius: 16px;
    border: 1px solid ${(props) => props.theme.bellAfter};
    min-width: 160px;
    box-shadow: 0px 32px 60px -32px rgba(0, 0, 0, 0.1);
    z-index: 1;
`
const Dropdown = styled.div`
    position: relative;
    &:hover ${DropdownContent} {
        display: block;
    }
`
const DropdownLink = styled.a`
    color: ${(props) => props.theme.cardText};
    display: flex;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 8px;
    &:hover {
        background: ${(props) => props.theme.hoverLInk};
    }
`
const DropBtn = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.headerText};
    border: none;
    text-transform: uppercase;
    cursor: pointer;
`
const Profile = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    margin-left: 10px;
    color: ${(props) => props.theme.btnColor}
`

const Header = () => {
    const { t } = useTranslation()
    const [lang, setLang] = useState(t('lang'));
    const [valut, setValut] = useState('USD');

    return (
        <HeaderTop>
            <Link to="/">
                <AlignCenter>
                    <img src="/assets/img/tripGuideLogo.svg" alt="" />
                    <LogoText>TripGuide</LogoText>
                </AlignCenter>
            </Link>

            <AlignCenter>
                <Dropdown>
                <DropBtn>{valut}</DropBtn>
                <DropdownContent>
                    <DropdownLink href="#" onClick={(el) => {setValut(el.target.innerText)}}>USD</DropdownLink>
                    <DropdownLink href="#" onClick={(el) => {setValut(el.target.innerText)}}>RUBL</DropdownLink>
                    <DropdownLink href="#" onClick={(el) => {setValut(el.target.innerText)}}>SUM</DropdownLink>
                </DropdownContent>
                </Dropdown>
                <Dropdown>
                <DropBtn>
                    <Flag>
                        <img style={{width: '100%'}} src={`/assets/img/${lang}.png`} alt="" />
                    </Flag>
                </DropBtn>
                <DropdownContent>
                    <DropdownLink to="/" onClick={() => {i18next.changeLanguage('en') && setLang('en')}}>
                        <Flag>
                            <img style={{width: '100%'}} src={`/assets/img/en.png`} alt="" />
                        </Flag> English (us)</DropdownLink>
                    <DropdownLink to="/" onClick={() => {i18next.changeLanguage('ru') && setLang('ru')}}>
                        <Flag>
                            <img style={{width: '100%'}} src={`/assets/img/ru.png`} alt="" />
                        </Flag> Russian</DropdownLink>
                    <DropdownLink to="/" onClick={() => {i18next.changeLanguage('uz') && setLang('uz')}}>
                        <Flag>
                            <img style={{width: '100%'}} src={`/assets/img/uz.png`} alt="" />
                        </Flag> Uzbek</DropdownLink>
                </DropdownContent>
                </Dropdown>

                <Bell>
                    <IconBell className="icon-bell"></IconBell>
                    <CounterBell>1</CounterBell>
                </Bell>

                <img src="/assets/img/person.png" alt="" />
                <Dropdown>
                <Profile>Delowar<i className="icon-select-bottom"></i></Profile>
                <DropdownContent>
                    <DropdownLink to="/profile"><BsPersonCircle style={{marginRight: '20px'}} /> My Profile</DropdownLink>
                    <DropdownLink to="/"><VscSignIn style={{marginRight: '20px'}}/> Sign out</DropdownLink>
                </DropdownContent>
                </Dropdown>
            </AlignCenter>
        </HeaderTop>
    );
}

export default Header;