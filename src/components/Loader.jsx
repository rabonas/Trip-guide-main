import React from 'react';
import styled, { keyframes } from 'styled-components'

const Flicker = keyframes`
    0% {
    background: transparent;
    }
    50% {
    background: white;
    }
    100% {
    background: transparent;
    }
`
const Neon = keyframes`
    0% {
    text-shadow: none;
    }
    50% {
    text-shadow: rgba(255, 255, 255, 0.8) 0 0 8px;
    }
    100% {
    text-shadow: none;
    }
`
const LoaderDiv = styled.div`
    padding: .5em;
    width: 5.5em;
    height: 9.5em;
    margin: 100px auto;
    background: #444444;
    position: relative;
    box-shadow: #2b2b2b 0 0 20px inset;
    border-radius: 4px;
`
const HotelSign = styled.div`
    padding: .25em 0;
    position: absolute;
    right: -1.5em;
    width: 1.3em;
    content: " ";
    text-align: center;
    background: #444444;
    font-family: sans-serif;
    font-weight: 700;
    border-radius: 4px;
    box-shadow: #2b2b2b 0 0 10px inset;
    animation: ${Neon} 3s infinite ease;
    & span {
        line-height: 1;
        display: block;
    }
`
const Window = styled.div`
    background: white;
    width: .5em;
    height: 1em;
    float: left;
    margin: 0 .5em .5em 0;
    border-radius: 2px;
    animation: ${Flicker} 1s infinite ease;
    &.window:nth-of-type(5n) {
        margin: 0 0 .5em 0;
    }
    &:nth-child(1) {
        animation-delay: 0.5s;
        animation-duration: 0.5s;
    }
    &:nth-child(2) {
        animation-delay: 1s;
        animation-duration: 1s;
    }
    &:nth-child(3) {
        animation-delay: 1.5s;
        animation-duration: 1.5s;
    }
    &:nth-child(4) {
        animation-delay: 2s;
        animation-duration: 2s;
    }
    &:nth-child(5) {
        animation-delay: 2.5s;
        animation-duration: 2.5s;
    }
    &:nth-child(5) {
        animation-delay: 1.25s;
        animation-duration: 1.25s;
    }
    &:nth-child(6) {
        animation-delay: 1.5s;
        animation-duration: 1.5s;
    }
    &:nth-child(7) {
        animation-delay: 1.75s;
        animation-duration: 1.75s;
    }
    &:nth-child(8) {
        animation-delay: 2s;
        animation-duration: 2s;
    }
    &:nth-child(9) {
        animation-delay: 2.25s;
        animation-duration: 2.25s;
    }
    &:nth-child(10) {
        animation-delay: 2.5s;
        animation-duration: 2.5s;
    }
    &:nth-child(10) {
        animation-delay: 1s;
        animation-duration: 1s;
    }
    &:nth-child(11) {
        animation-delay: 1.1s;
        animation-duration: 1.1s;
    }
    &:nth-child(12) {
        animation-delay: 1.2s;
        animation-duration: 1.2s;
    }
    &:nth-child(13) {
        animation-delay: 1.3s;
        animation-duration: 1.3s;
    }
    &:nth-child(14) {
        animation-delay: 1.4s;
        animation-duration: 1.4s;
    }
    &:nth-child(15) {
        animation-delay: 1.5s;
        animation-duration: 1.5s;
    }
    &:nth-child(16) {
        animation-delay: 1.6s;
        animation-duration: 1.6s;
    }
    &:nth-child(17) {
        animation-delay: 1.7s;
        animation-duration: 1.7s;
    }
    &:nth-child(18) {
        animation-delay: 1.8s;
        animation-duration: 1.8s;
    }
    &:nth-child(19) {
        animation-delay: 1.9s;
        animation-duration: 1.9s;
    }
    &:nth-child(20) {
        animation-delay: 2s;
        animation-duration: 2s;
    }
    &:nth-child(20) {
        animation-delay: 1.33333s;
        animation-duration: 1.66667s;
    }
    &:nth-child(21) {
        animation-delay: 1.4s;
        animation-duration: 1.75s;
    }
    &:nth-child(22) {
        animation-delay: 1.46667s;
        animation-duration: 1.83333s;
    }
    &:nth-child(23) {
        animation-delay: 1.53333s;
        animation-duration: 1.91667s;
    }
    &:nth-child(24) {
        animation-delay: 1.6s;
        animation-duration: 2s;
    }
    &:nth-child(25) {
        animation-delay: 1.66667s;
        animation-duration: 2.08333s;
    }
    &:nth-child(26) {
        animation-delay: 1.73333s;
        animation-duration: 2.16667s;
    }
    &:nth-child(27) {
        animation-delay: 1.8s;
        animation-duration: 2.25s;
    }
    &:nth-child(28) {
        animation-delay: 1.86667s;
        animation-duration: 2.33333s;
    }
    &:nth-child(29) {
        animation-delay: 1.93333s;
        animation-duration: 2.41667s;
    }
    &:nth-child(30) {
        animation-delay: 2s;
        animation-duration: 2.5s;
    }
`
const Door = styled.div`
    background: white;
    position: absolute;
    bottom: 0;
    width: 1em;
    height: 1.5em;
    left: 50%;
    margin-left: -.5em;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`

export const Loader = () => {
    return (
        <LoaderDiv>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Window></Window>
            <Door></Door>
            <HotelSign>
                <span>H</span>
                <span>O</span>
                <span>T</span>
                <span>E</span>
                <span>L</span>
            </HotelSign>
        </LoaderDiv>
    )
}
