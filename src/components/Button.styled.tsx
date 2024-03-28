import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type ButtonPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
    btnType?: 'primary' | 'outlined'
    active?: boolean
}


export const Button = styled.button<ButtonPropsType>`
    border: none;
    border-radius: 10px;
    //background-color: darkorange;
    background-color: ${props => props.color || 'darkorange'};
    padding: 10px 20px;
    color: azure;
    //font-size: 2rem;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;

  

    /*  &:last-child {
          background-color: #65cb37;      //если он последний элемент то
      }*/

            //outlined
    ${props => props.outlined && css<ButtonPropsType>`
        border: 2px solid ${props => props.color || 'darkorange'};
        color: ${props => props.color || 'darkorange'};
        background-color: transparent;
        
        &:hover{
            border-color: #8725d2;
            color: #8725d2;
            background-color: transparent;
        }
    `} 
            //primary
    ${props => props.btnType === 'primary' && css<ButtonPropsType>`
        background-color: ${props => props.color || 'darkorange'};
        color: azure;

        &:hover {
            background-color: #8725d2;
        }
    `}
    
    ${props => props.active && css<ButtonPropsType>`
        box-shadow: 5px 5px 5px 5px rgba(198, 166, 222, 0.44);
    `}
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