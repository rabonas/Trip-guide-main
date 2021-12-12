import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import apiCalls from '../config/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import { Featured } from '../components/Featured';
import { Intro } from '../components/Intro';
import { TopTour } from '../components/TopTour';
import { Container, Row, RowAround } from '../styled';
import { Explore } from '../components/Explore';
import { Trending } from '../components/Trending';
import { Travel } from '../components/Travel';
import { Card } from '../components/Card';
import SwiperCore, { Navigation } from 'swiper';
import { Loader } from '../components/Loader';

const SectionTop = styled.section`
    background-color:  ${(props) => props.theme.bgColor};
    padding: 150px 0 80px;
    text-align: center;
` 
const Section = styled.section`
    background-color:  ${(props) => props.theme.bgColor};
    padding-bottom: 70px;
`
const SectionTrending = styled.section`
    padding: 60px 0;
    text-align: center;
    background-color: ${(props) => props.theme.sectionBg};
`
const SectionTravel = styled.section`
    padding: 75px 0 250px;
    background-color: ${(props) => props.theme.bgColor};
`
const TravelCards = styled.div`
    margin-top: 30px;
`
const SecTitle = styled.h2`
    font-size: 48px;
    letter-spacing: -0.005em;
    color: ${(props) => props.theme.titleColor};
    margin: 0 0 12px;
`
const SecText = styled.p`
    font-weight: 500;
    margin: 0 auto;
    line-height: 24px;
    margin: 0;
    color: #84878B;
`
const SliderBtn = styled.button`
    padding: 13px 15px;
    border-radius: 50%;
    border: none;
    margin-left: 10px;
    font-size: 10px;
    background-color: ${(props) => props.theme.bellAfter};
    color: ${(props) => props.theme.headerText};
`

const Home = () => {
    SwiperCore.use([Navigation]);
    const { t } = useTranslation();
    const [tour, setTour] = useState([]);
    const [explore, setExplore] = useState([]);
    const [trending, setTrending] = useState([]);
    const [tourLoader, setTourLoader] = useState(true);
    const [exploreLoader, setExploreLoader] = useState(true);
    const [trendingLoader, setTrendingLoader] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        apiCalls.getTours().then(data => {
            setTour(data);
            setTourLoader(false);
        }).catch( err => {
            setError(err.message);
        });

        apiCalls.getExplore().then((data) => {
            setExplore(data);
            setExploreLoader(false);
        }).catch(err => {
            setError(err.message);
        })

        apiCalls.getCities().then((data) => {
            setTrending(data);
            setTrendingLoader(false);
        }).catch(err => {
            setError(err.message);
        })
    }, []);

    return (
        <div>
            <Intro/>
            <SectionTop>
                <SecTitle>{t('bestPlaceTitle')}</SecTitle>
                <SecText>{t('bestPlaceText')}</SecText>
                <Container>
                    <Row>
                        <Card image="/assets/img/batu.jpg" title="Batu, East Java" />
                        <Card image="/assets/img/kuta.jpg" title="Kuta" />
                        <Card image="/assets/img/surabaya.jpg" title="Surabaya, East Java" />
                        <Card image="/assets/img/malang.jpg" title="Malang, East Java" />
                        <Card image="/assets/img/malang.jpg" title="Dieng, Central Java" />
                        <Card image="/assets/img/nusa.jpg" title="Nusa Dua, Lombok" />
                        <Card image="/assets/img/kuta.jpg" title="Bandung, West Java" />
                        <Card image="/assets/img/batu.jpg" title="Wakatobi, Sumatera" />
                    </Row>
                </Container>
            </SectionTop>

            <Section>
                <Container>
                    <SecTitle>{t('featuredTitle')}</SecTitle>
                    <SecText>{t('featuredText')}</SecText>
                    <Featured/>
                </Container>
            </Section>

            <Section>
                <Container>
                    <Row>
                        <div>
                            <SecTitle>{t('topTitle')}</SecTitle>
                            <SecText>{t('topText')}</SecText>
                        </div>

                        <div>
                            <SliderBtn className="tour__prevButton"><i className="icon-left"></i></SliderBtn>
                            <SliderBtn className="tour__nextButton"><i className="icon-right"></i></SliderBtn>
                        </div>
                    </Row>
                    <Swiper slidesPerView={3} spaceBetween={30} style={{marginTop: '60px'}} modules={[Navigation]} navigation={{
                        nextEl: '.tour__nextButton',
                        prevEl: '.tour__prevButton'
                    }}>
                        {error || tourLoader ? <Loader/> : 
                        tour.map(e => (
                            <SwiperSlide key={e.id}>
                                <TopTour image={`/assets/img/${e.photo}`} state={e.name} city={e.country} pop={e.place_count} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </Section>
            
            <Section>
                <Container>
                    <Row>
                        <div>
                            <SecTitle>{t('exploreTitle')}</SecTitle>
                            <SecText>{t('exploreText')}</SecText>
                        </div>
                        <div>
                            <SliderBtn className="explore__prevButton"><i className="icon-left"></i></SliderBtn>
                            <SliderBtn className="explore__nextButton"><i className="icon-right"></i></SliderBtn>
                        </div>
                    </Row>
                    <Swiper slidesPerView={4} spaceBetween={30} style={{marginTop: '50px'}} modules={[Navigation]} navigation={{
                        nextEl: '.explore__nextButton',
                        prevEl: '.explore__prevButton'
                    }}>
                        {error || exploreLoader ? <Loader/> : explore.map(el => (
                            <SwiperSlide key={el.id}>
                                <Explore photo={el.image} title={el.title} rooms={el.rooms} radius={el.radius} price={el.price} location={el.location} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </Section>

            <SectionTrending>
                <SecTitle>{t('trendingTitle')}</SecTitle>
                <SecText>{t('trendingText')}</SecText>
                <Container>
                    <RowAround>
                        {error || trendingLoader ? <Loader/> : trending.map(el => 
                            (<Trending key={el.id} image={`/assets/img/${el.photo}`} name={el.name} price={el.price} rating={el.rating} />) )
                        }
                    </RowAround>
                </Container>
            </SectionTrending>

            <SectionTravel>
                <Container>
                    <SecTitle>{t('travelTitle')}</SecTitle>
                    <SecText>{t('travelText')}</SecText>
                    <TravelCards>
                        <Row>
                            <Travel image="/assets/img/beach.jpg" name={t('beach')} />
                            <Travel image="/assets/img/city.jpg" name={t('city')} />
                            <Travel image="/assets/img/hiking.jpg" name={t('hiking')} />
                            <Travel image="/assets/img/sports.jpg" name={t('sports')} />
                        </Row>
                    </TravelCards>
                </Container>
            </SectionTravel>
        </div>
    );
}

export default Home;
