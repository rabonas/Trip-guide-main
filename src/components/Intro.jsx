import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from "styled-components";
import { Container } from '../styled';
import { Search } from './Search';

const IntroBg = styled.div`
    background: linear-gradient(110.89deg, rgba(207, 241, 255, 0.8) 30.76%, rgba(255, 255, 255, 0) 63.61%);
    padding: 140px 0 200px;
`
const IntroDiv = styled.div`
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const Title = styled.h1`
    width: 60%;
    height: 240px;
    font-size: 64px;
    letter-spacing: -0.005em;
    margin: 0;
    color: #3B3E44;
    text-shadow: 0px 8px 16px rgba(51, 51, 51, 0.08);
`
const SearchCard = styled.div`
    position: absolute;
    bottom: -78px;
    width: 100%;
`

export const Intro = () => {
    const { t } = useTranslation()
    return (
            <IntroDiv style={{backgroundImage: 'url(/assets/img/intro-img.jpg)'}}>
                <IntroBg>
                    <Container>
                        <Title>{t('bigTitle')}</Title>
                    </Container>
                </IntroBg>
                <SearchCard>
                    <Search/>
                </SearchCard>
            </IntroDiv>
    )
}
