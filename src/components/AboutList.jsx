import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const About = styled.div`
    flex: 2;
`
const ListTitle = styled.h2`
    font-size: 40px;
    letter-spacing: -0.005em;
    color: ${(props) => props.theme.detailsTitle};
    margin: 0 0 10px;
`
const City = styled.span`
    font-weight: 500;
    font-size: 24px;
    color: ${(props) => props.theme.detailsCity};
`
const TabsDiv = styled.div`
    margin-top: 30px;
    padding: 30px 0;
    border-top: 1px solid ${(props) => props.theme.searchBr};
    border-bottom: 1px solid ${(props) => props.theme.searchBr};
`
const AboutTab = styled.span`
    color: ${(props) => props.theme.tabColor};
    font-weight: 500;
    margin-right: 42px;
    .react-tabs__tab.react-tabs__tab--selected &{
        color: #145CE6;
    }
`
const AboutText = styled.p`
    line-height: 24px;
    color: ${(props) => props.theme.detailText};
    margin: 20px 0;
`
const Feature = styled.h3`
    color: ${(props) => props.theme.detailsTitle};
    margin: 38px 0 25px;
`
const FeatureIcons = styled.div`
    padding-bottom: 62px;
    border-bottom: 1px solid ${(props) => props.theme.searchBr};
`
const Icon = styled.span`
    color: ${(props) => props.theme.detailText};
    margin-right: 45px;
    & i {
        margin-right: 10px;
    }
`
const Amenities = styled.div`
    padding-top: 60px;
    display: flex; 
    align-items: flex-end;
`
const Icons = styled.div`
    margin-left: 120px;
`
const AmenitiesTitle = styled.h3`
    margin: 0 0 28px;
    font-size: 24px;
    color: ${(props) => props.theme.detailsTitle};
`
const Amenitie = styled.div`
    margin-bottom: 26px;
`
const More = styled.button`
    padding: 10px 30px;
    margin-top: 30px;
    color: #FFFFFF;
    background: #3B71FE;
    border-radius: 47px;
    border: none;
    font-size: 16px;
`

export const AboutList = () => {
    const { t } = useTranslation()
    return (
        <About>
            <ListTitle>{t('exclusive')}</ListTitle>
            <City>{t('switzerland')}</City>
            <TabsDiv>
                <Tabs>
                    <TabList>
                        <Tab><AboutTab>{t('description')}</AboutTab></Tab>
                        <Tab><AboutTab>{t('features')}</AboutTab></Tab>
                        <Tab><AboutTab>{t('room&price')}</AboutTab></Tab>
                        <Tab><AboutTab>{t('review')}</AboutTab></Tab>
                    </TabList>
                </Tabs>
            </TabsDiv>
            <AboutText>{t('detaileText')}</AboutText>
            <Feature>{t('hotelFeatures')}</Feature>
            <FeatureIcons>
                <Icon><i className="icon-wifi-1"></i>Wi-fi</Icon>
                <Icon><i className="icon-bath"></i>{t('bathup')}</Icon>
                <Icon><i className="icon-breakfast"></i>{t('breakFast')}</Icon>
                <Icon><i className="icon-bed"></i>{t('kinsBed')}</Icon>
                <Icon><i className="icon-circle"></i>4m - 6m</Icon>
            </FeatureIcons>
            <Amenities>
                <div>
                    <AmenitiesTitle>{t('amenities')}</AmenitiesTitle>
                    <Amenitie><Icon><i className="icon-wifi-1"></i>{t('freeWifi')} 24/7</Icon></Amenitie>
                    <Amenitie><Icon><i className="icon-computer"></i>{t('freeCom')}</Icon></Amenitie>
                    <Amenitie><Icon><i className="icon-tv-big"></i>{t('freeWifi')} 24/7</Icon></Amenitie>
                    <Amenitie><Icon><i className="icon-mini-tv"></i>{t('freeWifi')} 24/7</Icon></Amenitie>
                </div>
                <Icons>
                    <Amenitie><Icon><i className="icon-bath"></i>{t('freeClean')}</Icon></Amenitie>
                    <Amenitie><Icon><i className="icon-pizza"></i>{t('incBreakfast')}</Icon></Amenitie>
                    <Amenitie><Icon><i className="icon-atm"></i>{t('atm')}</Icon></Amenitie>
                    <Amenitie><Icon><i className="icon-rooms"></i>{t('nearby')}</Icon></Amenitie>
                </Icons>
            </Amenities>
            <More>{t('moreDet')}</More>
        </About>
    )
}
