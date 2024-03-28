import React from 'react';
import {Button, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            {/*  <Menu>
                <ul>
                    <li><a href="1">menu item 1</a></li>
                    <li><a href="2">menu item 2</a></li>
                    <li><a href="3">menu item 3</a></li>
                </ul>
            </Menu>*/}
            <Box>
                {/* <Button as={Link} href={'#'}>LinkComponent</Button>
                <Button as='a' href={'#'}>Link</Button>*/}
                {/*Button color='red' fontSize={'30px'}>Hello</Button>
                <Button color='green'>Hello</Button>*/}
                {/*<Button primary>Hello</Button>*/}
                <Button outlined>Hello</Button>
                <Button btnType={'primary'} color={myTheme.colors.primary}>Hello</Button>
                <Button btnType={'primary'} active>Hello</Button>
                <Button btnType={'primary'} color={myTheme.colors.secondary}>Hello</Button>


                {/*<SuperButton>SuperButton</SuperButton>*/}
            </Box>
        </div>
    );
}

export default App;

export const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }

   /* @media screen and (max-width: 800px) {
        //адаптив
        flex-direction: column;
    }*/
    @media ${myTheme.media.tablet} {  //адаптив
        flex-direction: column;
    }
`