import React from 'react';
import styled, { keyframes } from 'styled-components'

const Animation = keyframes`
    25% {
    transform: rotate(25deg);
    }
    0% , 50%  , 100% {
    transform: rotate(0deg);
    }
    75% {
    transform: rotate(-25deg);
    }
`
const Page = styled.div`
    background: #1A1A1A;
    overflow: hidden;
    padding: 300px 0 300px;
    color: #1A1A1A;
    &:after, &:before {
        content: '404';
        position: absolute;
        font-size: 100px;
        left: 0;
        right: 0;
        text-align: center;
        bottom: 340px;
        font-weight: 600;
        z-index: 200;
    }
    &:before {
        content: 'Page Not Found';
        font-size: 22px;
        font-weight: 400;
        bottom: 330px;
    }
`
const Head = styled.div`
    display: block;
    width: 35px;
    height: 140px;
    background: #646464;
    border-bottom: 10px solid #333;
    margin: auto;
    transform-origin: 50% 100%;
    animation: 5s ${Animation} linear infinite;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    &:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 25px 25px 0 25px;
        border-color: #333 transparent transparent transparent;
        width: 36px;
        left: -25px;
        top: 0;
        box-shadow: 0px -10px 0 #FEAF33;
    }
    &:before {
        content: '';
        position: absolute;
        width: 8px;
        height: 15px;
        background: #FEAF33;
        left: 0;
        right: 0;
        margin: auto;
        top: 40px;
        border-radius: 6px;
        box-shadow: 0px 0 1px 2px #333;
    }
`
const Meta = styled.div`
    display: block;
    width: 250px;
    height: 200px;
    background: #FFFEE2;
    border-radius: 50%;
    position: absolute;
    left: -107px;
    bottom: 270px;
    margin: auto;
    text-align: center;
    color: #333;
    font-size: 90px;
    line-height: 200px;
    font-weight: 600;
    &:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 190px 75px 0 75px;
        border-color: rgba(255, 254, 226, 0.3) transparent transparent transparent;
        width: 83px;
        left: 10px;
        top: 100%;
        transform: translateY(-60px);
    }
`
  

export const NotFound = () => {
    return (
        <Page>
            <Head>
                <Meta></Meta>
            </Head>
        </Page>
    )
}