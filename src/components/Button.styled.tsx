import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const Button = styled.button`
    border: none;
    background-color: darkorange;
    padding: 10px 20px;
    color: azure;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #8725d2;
    }

    &:last-child {
        background-color: #65cb37;
    }
`
export const SuperButton = styled(Button)`
    border-radius: 5px;
    background-color: cornflowerblue;
    color: #1e1336;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }

        /*animation: ${MyAnimation} 2s ease-in-out infinite;*/ //анимация
`