import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { Container, Bread, ThisPage } from '../styled'
import { Confirm } from '../components/Confirm';
import { Booked } from '../components/Booked';
import { useParams } from 'react-router-dom';
import apiCalls from '../config/api';

const PaymentSec = styled.section`
    padding: 40px 0 250px;
    background-color: ${(props) => props.theme.bgColor}
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 50px;
`

export const Payment = () => {
    const { t } = useTranslation()
    const [hotel, setHotel] = useState({});

    const { id } = useParams();

    useEffect(() => {
        apiCalls.getHotelDetail(id).then(data => {
            setHotel(data);
        })
    }, [id]);

    return (
        <PaymentSec>
            <Container>
                <Bread to="/">{t('pageName1')} <span className="icon-right"></span></Bread>
                <Bread to="/hotelist">{t('pageName2')} <span className="icon-right"></span></Bread>
                <Bread to={`/details/${hotel.id}`}>{t('pageName3')} <span className="icon-right"></span></Bread>
                <ThisPage>{t('pageName4')}</ThisPage>

                <Flex>
                    <Confirm id={hotel.id}/>
                    <Booked image={hotel.photo} rating={hotel.rating} reviews={hotel.reviews} name={hotel.name} price={hotel.price} />
                </Flex>
            </Container>
        </PaymentSec>
    )
}
